import React from 'react';
import CasoDeUso from '../componentes/CasoDeUso';
import FormularioPago from '../componentes/Formularios/FormularioPago';

const columns = [
    {
        Header: 'Codigo Pago',
        accessor: 'id_pago',
    },
    {
        Header: 'Código Nota de Entrega',
        accessor: 'codigo_nota_entrega',
    },
    {
        Header: 'Monto Pagado',
        accessor: 'monto_pagado',
    },
    {
        Header: 'Fecha de Pago',
        accessor: 'fecha_pago',
    },
];

const GestionarPagos = () => {
    return (
        <CasoDeUso
            titulo="Gestionar Pagos"
            columnas={columns}
            dataUrl="http://localhost:3000/pagos"
            botonTexto="Agregar Pago"
            ComponenteFormulario={FormularioPago}
        />
    );
};

export default GestionarPagos;
