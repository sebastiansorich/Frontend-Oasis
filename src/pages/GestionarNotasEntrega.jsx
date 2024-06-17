import React from 'react';
import CasoDeUso from '../componentes/CasoDeUso';
import FormularioNotaEntrega from '../componentes/Formularios/FormularioNotaEntrega';

const columns = [
    {
        Header: 'ID Nota de Entrega',
        accessor: 'id_nota_entrega',
    },
    {
        Header: 'ID Trabajador',
        accessor: 'id_trabajador',
    },
    {
        Header: 'ID Cliente',
        accessor: 'id_cliente',
    },
    {
        Header: 'Fecha',
        accessor: 'fecha',
    },
    {
        Header: 'Total',
        accessor: 'total',
    },
    {
        Header: 'Estado',
        accessor: 'estado',
    },
    
];

const GestionarNotaEntrega = () => {
    return (
        <CasoDeUso
            titulo="Gestionar Notas de Entrega"
            columnas={columns}
            dataUrl="http://localhost:3000/notasEntrega"
            botonTexto="Agregar Nota de Entrega"
            ComponenteFormulario={FormularioNotaEntrega}
        />
    );
};

export default GestionarNotaEntrega;
