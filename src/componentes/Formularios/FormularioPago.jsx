import React, { useState } from 'react';
import SelectNotaEntrega2 from '../Selects/SelectNotaEntrega2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormularioPago = ({ onClose, onRegistrarPago }) => {
  const [idNotaEntrega, setIdNotaEntrega] = useState('');
  const [montoPagado, setMontoPagado] = useState('');

  const handleClose = () => {
    onClose(); // Cerrar el formulario
    history.go(0); // Recargar la página actual
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoPago = {
      codigo_nota_entrega: idNotaEntrega,
      monto_pagado: parseFloat(montoPagado), // Asegurarse de que el monto sea un número
    };

    try {
      const response = await fetch('https://backend-oasis.onrender.com/pagos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoPago),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      const responseData = await response.json();
      console.log('Respuesta:', responseData);

      // Mostrar notificación de éxito
      toast.success('Pago creado exitosamente');

      // Limpiar el formulario
      setIdNotaEntrega('');
      setMontoPagado('');
      
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Error al crear el pago');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6 lg:p-8">
       <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h3 className="p-5 border-b-2 border-gray-200 w-full text-center">Registrar Pago</h3>
        <ToastContainer/>
        <form className="bg-gray-100 p-5" onSubmit={handleSubmit}>
          <div className="block bg-gray-100 w-full h-full">
            <div className="block content-center p-5">
              <SelectNotaEntrega2
                value={idNotaEntrega}
                onChange={setIdNotaEntrega}
                className="w-full p-2 border rounded"
              />
              <label className="w-full ml-2 mr-2" htmlFor="">
                Selecione nota de entrega a pagar
              </label>
            </div>
            <div className="block content-center p-5">
              <input
                type="number" // Cambiar el tipo de entrada a 'number'
                value={montoPagado}
                onChange={(e) => setMontoPagado(e.target.value)}
                className="w-full ml-2 mr-2 mb-2 border-b-2 border-solid"
                placeholder=".BOB"
                required
              />
              <label className="w-full ml-2 mr-2">Monto Pagado</label>
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
                style={{ backgroundColor: '#ff834f ' }}
                className="inline-flex text-white bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Registrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioPago;
