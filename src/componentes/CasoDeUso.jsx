import React, { useState } from 'react';
import GenericTable from '../componentes/tables/GenericTable';

const CasoDeUso = ({ titulo, columnas, dataUrl, botonTexto, ComponenteFormulario }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div className="flex-col ml-80 w-screen">
      <h1 className="bg-gray-300 p-4 m-4 rounded-lg mb-5">
        {titulo}
      </h1>
      <div className="bg-gray-100 w-full h-screen flex flex-col items-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-end mb-4">
            <button
              type="button"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              onClick={() => setMostrarFormulario(true)}
            >
              {botonTexto}
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 pt-5">
            <GenericTable columns={columnas} dataUrl={dataUrl} />
          </div>
        </div>
      </div>
      {mostrarFormulario && (
        <ComponenteFormulario
          onClose={() => setMostrarFormulario(false)}
        />
      )}
    </div>
  );
};

export default CasoDeUso;
