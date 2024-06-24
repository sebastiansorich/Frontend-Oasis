import React from 'react';
import CasoDeUso from '../componentes/CasoDeUso';
import FormularioNotaEntrega from '../componentes/Formularios/FormularioNotaEntrega';

const columns = [
    {
        Header: 'Codigo Nota de Entrega',
        accessor: 'id_nota_entrega',
    },
    {
        Header: 'codigo Trabajador',
        accessor: 'id_trabajador',
    },
    {
        Header: 'Codigo Cliente',
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
            dataUrl="https://backend-oasis.onrender.com/notasEntrega"
            botonTexto="Agregar Nota de Entrega"
            ComponenteFormulario={FormularioNotaEntrega}
        />
    );
};

export default GestionarNotaEntrega;
