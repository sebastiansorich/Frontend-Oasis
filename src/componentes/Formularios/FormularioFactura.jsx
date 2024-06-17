// src/components/Formularios/FormularioFactura.jsx
import React, { useState } from 'react';
import SelectNotaEntrega from '../Selects/SelectNotaEntrega2';
import SelectNIT from '../Selects/SelectNIT';
import SelectTrabajadores from '../Selects/SelectTrabajadores';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormularioFactura = ({ onClose, onRegistrarFactura }) => {
  const handleClose = () => {
    onClose(); // Cerrar el formulario
    window.location.reload(); // Actualizar la página
  };

  const [codigoFactura, setCodigoFactura] = useState('');
  const [idNotaEntrega, setIdNotaEntrega] = useState('');
  const [idNIT, setIdNIT] = useState('');
  const [idTrabajador, setIdTrabajador] = useState('');
  const [total, setTotal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevaFactura = {
      id_nota_entrega: idNotaEntrega,
      nit_cliente: idNIT,
      //   id_trabajador: idTrabajador,
      //   total: parseFloat(total), // Asegurarse de que el total sea un número
      //   codigo_factura: codigoFactura
    };

    try {
      const response = await fetch('http://localhost:3000/facturas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevaFactura),
      });
      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      const responseData = await response.json();
      console.log('Respuesta:', responseData);

      // Mostrar notificación de éxito
      toast.success('Factura creada exitosamente');

      // Limpiar el formulario
      setCodigoFactura('');
      setIdNIT('');
      setIdTrabajador('');



    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Error al crear la factura');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-2/6">
        <h3 className="p-5 border-b-2 border-gray-200 w-full text-center">Registrar Factura</h3>
        <ToastContainer />
        <form className="bg-gray-100 p-5" onSubmit={handleSubmit}>
          <div className="block bg-gray-100 w-full h-full">

            <div className="content-center p-5">
              <SelectNotaEntrega
                value={idNotaEntrega}
                onChange={setIdNotaEntrega}
                className="w-full p-2 border rounded"
              />
              <label className="w-full ml-2 mr-2">Código de Nota de Entrega</label>
            </div>
            <div className="content-center p-5">
              <SelectNIT
                value={idNIT}
                onChange={setIdNIT}
                className="w-full p-2 border rounded"
              />
              <label className="w-full ml-2 mr-2">NIT del Cliente</label>
            </div>
            <div className="content-center p-5">
              <SelectTrabajadores
                value={idTrabajador}
                onChange={setIdTrabajador}
                className="w-full p-2 border rounded"
              />
              <label className="w-full ml-2 mr-2">Código del Trabajador</label>
            </div>
            {/* <div className="content-center p-5">
              <input
                type="number"
                className="w-full ml-2 mr-2 mb-2 border-b-2 border-solid"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                placeholder="Total"
                required
              />
              <label className="w-full ml-2 mr-2">Total</label>
            </div> */}
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

export default FormularioFactura;
