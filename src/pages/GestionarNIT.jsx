import React from 'react';
import CasoDeUso from '../componentes/CasoDeUso';
import FormularioNIT from '../componentes/Formularios/FormularioNIT';

const columns = [
    {
        Header: 'NIT/CI',
        accessor: 'nit',
    },
    {
        Header: 'Nombre',
        accessor: 'nombre_cliente',
    },
];

const GestionarNIT = () => {
    return (
        <CasoDeUso
            titulo="Gestionar NITs"
            columnas={columns}
            dataUrl="https://backend-oasis.onrender.com/nit"
            botonTexto="Agregar NIT"
            ComponenteFormulario={FormularioNIT}
        />
    );
};

export default GestionarNIT;
