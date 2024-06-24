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
      id: 'id_Producto', // Asegúrate de tener un ID único para los productos
      Header: 'Codigo producto',
      accessor: 'id_Producto',
    },
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
      Header: 'Codigo Proveedor',
      accessor: 'id_proveedor',
      Cell: ({ value }) => obtenerNombreProveedor(value),
    },
  ];

  return (
    <CasoDeUso
      titulo="Gestionar Productos"
      columnas={columns}
      dataUrl="https://backend-oasis.onrender.com/productos"
      botonTexto="Agregar Producto"
      ComponenteFormulario={FormularioProducto}
      botonReportes={"Generar Reporte"}
      linkreporte={"https://backend-oasis.onrender.com/Reportes/generar_inventario/"}
     
    />
  );
};

export default GestionarProductos;
