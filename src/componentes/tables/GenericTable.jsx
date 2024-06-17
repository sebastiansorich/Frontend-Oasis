import React, { useEffect, useState } from 'react';
import {
  createColumnHelper,
  useReactTable,
  flexRender,
  getCoreRowModel,
} from '@tanstack/react-table';

const GenericTable = ({ columns, dataUrl, proveedores, onEdit }) => {
  const [data, setData] = useState([]);
  const [columnConfig, setColumnConfig] = useState([]);
  const [editedItem, setEditedItem] = useState(null);
  const [editedIndex, setEditedIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataUrl);
        const result = await response.json();
        setData(result);
        console.log('Data fetched:', result);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [dataUrl]);

  useEffect(() => {
    const updateColumns = () => {
      const newColumnConfig = [...columns];

      newColumnConfig.forEach(col => {
        if (col.accessor === 'id_Producto' || col.accessor === 'id_Proveedor') {
          col.cell = info => info.row.original[col.accessor];
        }
      });

      return newColumnConfig;
    };

    setColumnConfig(updateColumns());
  }, [columns]);

  const handleEdit = (rowIndex) => {
    const editedRow = data[rowIndex];
    setEditedItem({ ...editedRow });
    setEditedIndex(rowIndex);
  };

  const handleDelete = async (row) => {
    const idField = columns.find(col => col.accessor.startsWith('id_')); // Busca el campo de ID dinámicamente
    const id = row[idField.accessor];

    if (!id) {
      console.error('No se pudo determinar el ID del elemento a eliminar', row);
      return;
    }

    try {
      const response = await fetch(`${dataUrl}/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setData(data.filter(item => item[idField.accessor] !== id));
      } else {
        const errorText = await response.text();
        console.error('Error al eliminar el elemento: ', response.status, errorText);
      }
    } catch (error) {
      console.error('Error al eliminar el elemento: ', error);
    }
  };

  const handleSaveEdit = () => {
    // Guardar los cambios en el estado `data`
    setData(prevData => {
      const newData = [...prevData];
      newData[editedIndex] = editedItem;
      return newData;
    });

    // Limpiar los estados de edición
    setEditedItem(null);
    setEditedIndex(null);
  };

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
              onClick={handleSaveEdit}
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
            onClick={() => handleEdit(rowIndex)}
            className="text-blue-600 hover:text-blue-900"
          >
            Editar
          </button>
        )}
        <button
          onClick={() => handleDelete(info.row.original)}
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

  return (
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
  );
};

export default GenericTable;
