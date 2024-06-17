import React from 'react';
import CasoDeUso from '../componentes/CasoDeUso';
import FormularioTrabajador from '../componentes/Formularios/FormularioTrabajador';

const columns = [
    {
        Header: 'ID Trabajador',
        accessor: 'id_trabajador',
    },
    {
        Header: 'Nombre',
        accessor: 'nombre',
    },
    {
        Header: 'Posición',
        accessor: 'id_cargo',
    },
    {
        Header: 'Teléfono',
        accessor: 'telefono',
    },
];

const GestionarTrabajadores = () => {
    return (
        <CasoDeUso
            titulo="Gestionar Trabajadores"
            columnas={columns}
            dataUrl="http://localhost:3000/trabajadores"
            botonTexto="Agregar Trabajador"
            ComponenteFormulario={FormularioTrabajador}
        />
    );
};

export default GestionarTrabajadores;
