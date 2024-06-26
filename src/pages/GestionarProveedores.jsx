import React from 'react';
import CasoDeUso from '../componentes/CasoDeUso';
import FormularioProveedor from '../componentes/Formularios/FormularioProveedor';

const columns = [
    {
        Header: 'Codigo Proveedor',
        accessor: 'id_Proveedor',
    },
    {
        Header: 'Nombre',
        accessor: 'nombre',
    },
    {
        Header: 'Pais',
        accessor: 'pais',
    },
    {
        Header: 'Teléfono',
        accessor: 'telefono',
    },
    {
        Header: 'Correo',
        accessor: 'correo',
    },
];

const GestionarProveedores = () => {
    return (
        <CasoDeUso
            titulo="Gestionar Proveedores"
            columnas={columns}
            dataUrl="https://backend-oasis.onrender.com/proveedores"
            botonTexto="Agregar Proveedor"
            ComponenteFormulario={FormularioProveedor}
        />
    );
};

export default GestionarProveedores;
