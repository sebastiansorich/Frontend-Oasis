import React from 'react';
import CasoDeUso from '../componentes/CasoDeUso';
import FormularioFactura from '../componentes/Formularios/FormularioFactura';

const columns = [
    {
        Header: 'Codigo Factura',
        accessor: 'id_factura',
    },
    {
        Header: 'Codigo Nota de Entrega',
        accessor: 'id_nota_entrega',
    },
    {
        Header: 'NIT',
        accessor: 'nit_cliente',
    },
    {
        Header: 'Fecha',
        accessor: 'fecha',
    },
   
];

const GestionarFacturas = () => {
    return (
        <CasoDeUso
            titulo="Gestionar Facturas"
            columnas={columns}
            dataUrl="http://localhost:3000/facturas"
            botonTexto="Agregar Factura"
            ComponenteFormulario={FormularioFactura}
        />
    );
};

export default GestionarFacturas;
