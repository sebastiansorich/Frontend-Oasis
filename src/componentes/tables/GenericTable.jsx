import React, { useEffect, useState } from 'react';
import {
  createColumnHelper,
  useReactTable,
  flexRender,
  getCoreRowModel,
} from '@tanstack/react-table';
import { handleEdit, handleSaveEdit } from './handleEdit';
import { handleDelete } from './handleDelete';

const GenericTable = ({ columns, dataUrl, onEdit }) => {
  const [data, setData] = useState([]);
  const [columnConfig, setColumnConfig] = useState([]);
  const [editedItem, setEditedItem] = useState(null);
  const [editedIndex, setEditedIndex] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga inicial

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataUrl);
        const result = await response.json();
        setData(result);
        console.log('Data fetched:', result);
        setLoading(false); // Marcar la carga como completa
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [dataUrl]); // Asegurarse de que dataUrl esté como dependencia si cambia

  const columnHelper = createColumnHelper();
  const newColumnConfig = columns.map((col) => columnHelper.accessor(col.accessor, {
    header: col.Header,
    cell: info => info.getValue(),
  }));

  newColumnConfig.push(columnHelper.display({
    id: 'actions',
    header: 'Acciones',
    cell: (info, rowIndex) => (
      <div className="flex space-x-2">
        {editedIndex === rowIndex ? (
          <>
            <button
              onClick={() => handleSaveEdit(data, editedItem, editedIndex, setData, setEditedItem, setEditedIndex)}
              className="text-green-600 hover:text-green-900"
            >
              Guardar
            </button>
            <button
              onClick={() => {
                setEditedItem(null);
                setEditedIndex(null);
              }}
              className="text-gray-600 hover:text-gray-900"
            >
              Cancelar
            </button>
          </>
        ) : (
          <button
            onClick={() => handleEdit(rowIndex, data, setEditedItem, setEditedIndex)}
            className="text-blue-600 hover:text-blue-900"
          >
            Editar
          </button>
        )}
        <button
          onClick={() => handleDelete(info.row.original, columns, dataUrl, data, setData)}
          className="text-red-600 hover:text-red-900"
        >
          Eliminar
        </button>
      </div>
    ),
  }));

  const table = useReactTable({
    data,
    columns: newColumnConfig,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) {
    return (
      <div className='spinner-container ml-80'>
        <div className='spinner'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div >Cargando datos...</div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row, rowIndex) => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                  {editedIndex === rowIndex ? (
                    /* Renderizar campos editables si la fila está siendo editada */
                    <input
                      type="text"
                      value={editedItem[cell.column.id]}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        setEditedItem(prevState => ({
                          ...prevState,
                          [cell.column.id]: newValue,
                        }));
                      }}
                    />
                  ) : (
                    /* Mostrar valor normalmente si no se está editando */
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;
