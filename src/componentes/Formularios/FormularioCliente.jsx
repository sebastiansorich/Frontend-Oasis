// src/components/FormularioCliente.jsx
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'; // Asumimos que tienes un componente para input de teléfono
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormularioCliente = ({ onClose, onCrearCliente }) => {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');


  const handleClose = () => {
    onClose(); // Cerrar el formulario
    window.location.reload(); // Actualizar la página
  };

  const handleCrearCliente = async (e) => {
    e.preventDefault();
    const nuevoCliente = {
      nombre,
      direccion,
      telefono,
    };

    try {
      const response = await fetch('http://localhost:3000/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoCliente),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      const responseData = await response.json();
      console.log('Respuesta:', responseData);

      // Mostrar notificación de éxito
      toast.success('Cliente creado exitosamente');

      // Limpiar el formulario
      setNombre('');
      setTelefono('');
      setDireccion('');

    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Error al crear el cliente');
    }

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6 lg:p-8">
       <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h3 className="p-5 border-b-2 border-gray-200 w-full text-center">Agregar Nuevo Cliente</h3>
        <ToastContainer />
        <form className="bg-gray-100 p-5" onSubmit={handleCrearCliente}>
          <div className="block bg-gray-100 w-full h-full">
            <div className="block content-center p-5">
              <input
                className="w-full px-4 py-2 border rounded-lg"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre del Cliente"
                required
              />
            </div>
            <div className="block content-center p-5">
              <input
                className="w-full px-4 py-2 border rounded-lg"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                placeholder="Dirección del Cliente"
                required
              />
            </div>
            <div className="block content-center p-5">
              <PhoneInput
                country={'bo'}
                value={telefono}
                onChange={setTelefono}
                containerStyle={{ width: '100%' }}
                inputStyle={{ width: '100%' }}
                buttonStyle={{ border: 'none' }}
                dropdownStyle={{ width: '10rem' }}
                placeholder="Teléfono del Cliente"
                required
              />
            </div>
            <div className="flex justify-end space-x-2 p-5">
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

export default FormularioCliente;