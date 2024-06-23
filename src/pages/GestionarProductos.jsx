// GestionarProductos.jsx
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
      id: 'nombre',
      Header: 'Nombre',
      accessor: 'nombre',
    },
    {
      id: 'precio',
      Header: 'Precio',
      accessor: 'precio',
    },
    {
      id: 'stock_minimo',
      Header: 'Stock Mínimo',
      accessor: 'stock_minimo',
    },
    {
      id: 'stock_actual',
      Header: 'Stock Actual',
      accessor: 'stock_actual',
    },
    {
      id: 'id_proveedor',
      Header: 'Proveedor',
      accessor: 'id_proveedor',
     
    },
  ];

  return (
    <CasoDeUso
      titulo="Gestionar Productos"
      columnas={columns}
      dataUrl="http://localhost:3000/productos"
      botonTexto="Agregar Producto"
      ComponenteFormulario={FormularioProducto}
     
    />
  );
};

export default GestionarProductos;
