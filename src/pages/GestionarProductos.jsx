import React from 'react';
import CasoDeUso from '../componentes/CasoDeUso';
import FormularioProducto from '../componentes/Formularios/FormularioProducto';

const GestionarProductos = ({ proveedores }) => {
  console.log("Proveedores en GestionarProductos:", proveedores);

  const obtenerNombreProveedor = (idProveedor) => {
    const proveedor = proveedores.find(proveedor => proveedor.id_Proveedor === idProveedor);
    console.log("Proveedor encontrado para id", idProveedor, ":", proveedor);
    return proveedor ? proveedor.nombre : 'Proveedor Desconocido';
  };

  const columns = [
    {
      id: 'id_Producto', // Agregar un id único
      Header: 'ID Producto',
      accessor: 'id_Producto',
    },
    {
      id: 'nombre', // Agregar un id único
      Header: 'Nombre',
      accessor: 'nombre',
    },
    {
      id: 'precio', // Agregar un id único
      Header: 'Precio',
      accessor: 'precio',
    },
    {
      id: 'stock_minimo', // Agregar un id único
      Header: 'Stock Mínimo',
      accessor: 'stock_minimo',
    },
    {
      id: 'stock_actual', // Agregar un id único
      Header: 'Stock Actual',
      accessor: 'stock_actual',
    },
    {
      id: 'id_proveedor', // Agregar un id único
      Header: 'Proveedor',
      accessor: 'id_proveedor',
      Cell: ({ value }) => obtenerNombreProveedor(value),
    },
  ];

  return (
    <CasoDeUso
      titulo="Gestionar Productos"
      columnas={columns}
      dataUrl="http://localhost:3000/productos"
      botonTexto="Agregar Producto"
      ComponenteFormulario={FormularioProducto}
      proveedores={proveedores}
    />
  );
};

export default GestionarProductos;
