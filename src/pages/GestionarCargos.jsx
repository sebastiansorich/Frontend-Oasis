import React from 'react';
import CasoDeUso from '../componentes/CasoDeUso';
import FormularioCargos from '../componentes/Formularios/FormularioCargos';

const columns = [
  {
    Header: 'Codigo Cargo',
    accessor: 'id_cargo',
  },
  {
    Header: 'nombre',
    accessor: 'nombre',
  },
  {
    Header: 'descripcion',
    accessor: 'descripcion',
  },
];
const GestionarCargos = () => {
  return (
    <CasoDeUso
      titulo="Gestionar Cargos"
      columnas={columns}
      dataUrl="http://localhost:3000/cargos"
      botonTexto="Agregar cargo"
      ComponenteFormulario={FormularioCargos}

    />
  );
}

export default GestionarCargos