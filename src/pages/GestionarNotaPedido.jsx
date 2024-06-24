import React from 'react';
import CasoDeUso from '../componentes/CasoDeUso';
import FormularioNotaPedido from '../componentes/Formularios/FormularioNotaPedido';



const GestionarNotaPedido = () => {
 
  const columns = [
    {
      Header: 'codigo Nota Recibo',
      accessor: 'id_nota_pedido',
    },
    {
      Header: 'ID Trabajador',
      accessor: 'id_trabajador',
    },
    {
      Header: 'Fecha',
      accessor: 'fecha',
    },
    {
      Header: 'Estado',
      accessor: 'estado',
    },
];

  return (
    <CasoDeUso
      titulo="Gestionar Notas de Recibo"
      columnas={columns}
      dataUrl="https://backend-oasis.onrender.com/notapedidocompra"
      botonTexto="Agregar Nota de Recibo"
      ComponenteFormulario={FormularioNotaPedido}
    />
  );
};

export default GestionarNotaPedido;
