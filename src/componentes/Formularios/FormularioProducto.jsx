// src/components/FormularioProducto.jsx
import React, { useState } from 'react';
import SelectProveedores from '../Selects/SelectProveedores'; // Asumimos que tienes un componente para seleccionar proveedores
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormularioProducto = ({ onClose, onCrearProducto }) => {
  const handleClose = () => {
    onClose(); // Cerrar el formulario
    window.location.reload(); // Actualizar la página
  };

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [id_proveedor, setIdProveedor] = useState('');
  const [stock_minimo, setStockMinimo] = useState('');
  const [stock_actual, setStockActual] = useState('');


  const handleCrearProducto = async (e) => {
    e.preventDefault();
    const nuevoProducto = {
      nombre,
      precio: parseFloat(precio), // Convertimos el precio a número
      stock_minimo: parseInt(stock_minimo), // Convertimos el stock mínimo a número entero
      stock_actual: parseInt(stock_actual), // Convertimos el stock actual a número entero
      id_proveedor: parseInt(id_proveedor), // Convertimos el ID del proveedor a número entero
    };

    try {
      const response = await fetch('http://localhost:3000/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoProducto),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      const responseData = await response.json();
      console.log('Respuesta:', responseData);

      // Mostrar notificación de éxito
      toast.success('Producto creado exitosamente');

      // Limpiar el formulario
      setIdProveedor('');
      setNombre('');
      setPrecio('');
      setStockActual('');
      setStockMinimo('');


    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Error al crear el Producto');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6 lg:p-8">
       <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h3 className="p-5 border-b-2 border-gray-200 w-full text-center">Agregar Nuevo Producto</h3>
        <ToastContainer />
        <form className="bg-gray-100 p-5" onSubmit={handleCrearProducto}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700">Nombre del producto</label>
            <input
              id="nombre"
              className="w-full px-4 py-2 border rounded-lg"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingrese el nombre del producto"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="precio" className="block text-gray-700">Precio</label>
            <input
              id="precio"
              className="w-full px-4 py-2 border rounded-lg"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Ingrese el precio del producto"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="id_proveedor" className="block text-gray-700">Proveedor</label>
            <SelectProveedores
              value={id_proveedor}
              onChange={setIdProveedor}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="stock_minimo" className="block text-gray-700">Stock Mínimo</label>
            <input
              id="stock_minimo"
              className="w-full px-4 py-2 border rounded-lg"
              value={stock_minimo}
              onChange={(e) => setStockMinimo(e.target.value)}
              placeholder="Ingrese el stock mínimo"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="stock_actual" className="block text-gray-700">Stock Actual</label>
            <input
              id="stock_actual"
              className="w-full px-4 py-2 border rounded-lg"
              value={stock_actual}
              onChange={(e) => setStockActual(e.target.value)}
              placeholder="Ingrese el stock actual"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
              onClick={handleClose}
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
        </form>
      </div>
    </div>
  );
};

export default FormularioProducto;
