import React from 'react';
import CasoDeUso from '../componentes/CasoDeUso';
import FormularioCliente from '../componentes/Formularios/FormularioCliente';

const columns = [
    {
        Header: 'ID Cliente',
        accessor: 'id_cliente',
    },
    {
        Header: 'Nombre',
        accessor: 'nombre',
    },
    {
        Header: 'Dirección',
        accessor: 'direccion',
    },
    {
        Header: 'Teléfono',
        accessor: 'telefono',
    },
    

];


const GestionarClientes = () => {
    

    return (
        <CasoDeUso
            titulo="Gestionar Clientes"
            columnas={columns}
            dataUrl="http://localhost:3000/clientes"
            botonTexto="Agregar Cliente" 
            ComponenteFormulario={FormularioCliente}
        />
    );
};

export default GestionarClientes;
