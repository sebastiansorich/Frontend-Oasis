import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormularioCargos = ({ onClose, onCrearCargo }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleClose = () => {
    onClose(); // Cerrar el formulario
    history.go(0); // Recargar la página actual
  };

  const handleCrearCargo = async (e) => {
    e.preventDefault();
    const nuevoCargo = {
      nombre,
      descripcion,
    };

    try {
      const response = await fetch('https://backend-oasis.onrender.com/cargos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoCargo),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      const responseData = await response.json();
      console.log('Respuesta:', responseData);

      // Mostrar notificación de éxito
      toast.success('Cargo creado exitosamente');

      // Limpiar el formulario
      setNombre('');
      setDescripcion('');

    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Error al crear el Cargo');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h3 className="p-5 border-b-2 border-gray-200 w-full text-center">Agregar Nuevo Cargo</h3>
        <ToastContainer />
        <form className="bg-gray-100 p-5" onSubmit={handleCrearCargo}>
          <div className="block bg-gray-100 w-full h-full">
            <div className="block content-center p-5">
              <input
                className="w-full px-4 py-2 border rounded-lg"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Titulo Del Cargo"
                required
              />
            </div>
            <div className="block content-center p-5">
              <input
                className="w-full px-4 py-2 border rounded-lg"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Descripcion del cargo"
                required
              />
            </div>
          
            <div className="flex justify-end space-x-2 p-5">
              <button
                type="button"
                onClick={handleClose} // Llama a la función onClose al hacer clic en Cancelar
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                style={{ backgroundColor: '#ff834f ' }}
              >
                Agregar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioCargos;
