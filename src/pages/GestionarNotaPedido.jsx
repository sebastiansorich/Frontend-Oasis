import React from 'react';
import CasoDeUso from '../componentes/CasoDeUso';
import FormularioNotaPedido from '../componentes/Formularios/FormularioNotaPedido';



const GestionarNotaPedido = () => {
 
  const columns = [
    {
      Header: 'ID Nota Pedido',
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
      Header: 'Total',
      accessor: 'total',
    },
    {
      Header: 'Estado',
      accessor: 'estado',
    },
];

  return (
    <CasoDeUso
      titulo="Gestionar Notas de Pedido de Compra"
      columnas={columns}
      dataUrl="http://localhost:3000/notapedidocompra"
      botonTexto="Agregar Nota de Pedido"
      ComponenteFormulario={FormularioNotaPedido}
    />
  );
};

export default GestionarNotaPedido;
