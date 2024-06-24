import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormularioNIT = ({ onClose, onCrearNIT }) => {
  const [nombreCliente, setNombreCliente] = useState('');
  const [nit, setNit] = useState('');

  const handleClose = () => {
    onClose(); // Cerrar el formulario
    window.location.reload(); // Actualizar la página
  };

  const handleCrearNIT = async (e) => {
    e.preventDefault();
    const nuevoNIT = {
      nit,
      nombre_cliente: nombreCliente,
    };

    try {
      const response = await fetch('https://backend-oasis.onrender.com/nit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoNIT),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      const responseData = await response.json();
      console.log('Respuesta:', responseData);

      // Mostrar notificación de éxito
      toast.success('Producto creado exitosamente');

      // Limpiar el formulario
      setNit('');
      setNombreCliente('');
 
      
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Error al crear el Producto');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6 lg:p-8">
       <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h3 className="p-5 border-b-2 border-gray-200 w-full text-center">Agregar Nuevo NIT</h3>
        <ToastContainer/>
        <form className="bg-gray-100 p-5" onSubmit={handleCrearNIT}>
          <div className="block bg-gray-100 w-full h-full">
            <div className="block content-center p-5">
              <input
                className="w-full px-4 py-2 border rounded-lg"
                value={nombreCliente}
                onChange={(e) => setNombreCliente(e.target.value)}
                placeholder="Nombre del Cliente"
                required
              />
            </div>
            <div className="block content-center p-5">
              <input
                className="w-full px-4 py-2 border rounded-lg"
                value={nit}
                onChange={(e) => setNit(e.target.value)}
                placeholder="CI/NIT"
                required
              />
            </div>
            <div className="flex content-center">
              <button
                type="button"
                onClick={handleClose}
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

export default FormularioNIT;
