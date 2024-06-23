import React, { useState } from 'react';
import SelectTrabajadores from '../Selects/SelectTrabajadores';
import SelectProductos from '../Selects/SelectProductos';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormularioNotaPedido = ({ onClose, trabajadores, productos }) => {
  const [trabajadorId, setTrabajadorId] = useState('');
  const [detalles, setDetalles] = useState([{ id_producto: '', cantidad: '' }]);
  const handleClose = () => {
    onClose(); // Cerrar el formulario
    window.location.reload(); // Actualizar la página
  };

  const handleDetallesChange = (index, event) => {
    const { name, value } = event.target;
    const newDetalles = [...detalles];
    newDetalles[index][name] = value;
    setDetalles(newDetalles);
  };

  const handleAddDetalle = () => {
    setDetalles([...detalles, { id_producto: '', cantidad: '' }]);
  };

  const handleRemoveDetalle = (index) => {
    const newDetalles = [...detalles];
    newDetalles.splice(index, 1);
    setDetalles(newDetalles);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const data = {
      id_trabajador: trabajadorId,
      DetallesNotasPedidos: detalles.map(detalle => ({
        id_producto: detalle.id_producto,
        cantidad: parseInt(detalle.cantidad, 10) // Asegurarse de que la cantidad es un número
      }))
    };
  
    console.log('Datos enviados:', JSON.stringify(data)); // Verificar los datos enviados
  
    try {
      const response = await fetch('http://localhost:3000/notapedidocompra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }
  
      const responseData = await response.json();
      console.log('Respuesta:', responseData);
      
      toast.success('Nota de pedido creada exitosamente');
  
      // Limpiar el formulario
      setTrabajadorId('');
      setDetalles([{ id_producto: '', cantidad: '' }]);
  
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Error al crear la nota de pedido');
    }
  };
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6 lg:p-8">
       <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <ToastContainer />
        <h2 className="text-lg font-semibold mb-4">Crear Nota de Pedido</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="trabajadorId" className="block mb-1">Trabajador:</label>
            <SelectTrabajadores
              value={trabajadorId}
              onChange={setTrabajadorId}
              className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              trabajadores={trabajadores}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Detalles:</label>
            {detalles.map((detalle, index) => (
              <div key={index} className="flex items-center mb-2">
                <SelectProductos
                  value={detalle.id_producto}
                  onChange={(value) => handleDetallesChange(index, { target: { name: 'id_producto', value } })}
                  className="w-1/2 mr-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  productos={productos}
                />
                <input type="number" name="cantidad" value={detalle.cantidad} onChange={(e) => handleDetallesChange(index, e)} placeholder="Cantidad" className="w-1/4 mr-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                <button type="button" onClick={() => handleRemoveDetalle(index)} className="bg-red-500 text-white rounded-md py-1 px-2 focus:outline-none">-</button>
              </div>
            ))}
            <button type="button" onClick={handleAddDetalle} className="bg-green-500 text-white rounded-md py-1 px-2 focus:outline-none">+</button>
          </div>
          <div className="flex content-center">
            <button type="button" onClick={handleClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600">Cerrar</button>
            <button type="submit" style={{ backgroundColor: '#ff834f ' }} className="text-white px-4 py-2 rounded hover:bg-orange-600">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioNotaPedido;
