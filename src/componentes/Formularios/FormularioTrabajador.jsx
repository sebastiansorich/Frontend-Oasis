import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2'; // Asumimos que tienes un componente para input de teléfono
import Select from 'react-select'; // Asumimos que tienes un componente de select para los cargos
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormularioTrabajador = ({ onClose, onCrearTrabajador }) => {
  const [cargos, setCargos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [selectedCargo, setSelectedCargo] = useState('');

  useEffect(() => {
    const fetchCargos = async () => {
      try {
        const response = await fetch('http://localhost:3000/cargos');
        if (!response.ok) {
          throw new Error('Error al obtener la lista de cargos');
        }
        const data = await response.json();
        // Transformar los datos para que tengan la forma necesaria para React-Select
        const options = data.map(cargo => ({
          value: cargo.id_cargo,
          label: cargo.nombre
        }));
        setCargos(options);
      } catch (error) {
        console.error('Error:', error.message);
        toast.error('Error al obtener la lista de cargos');
      }
    };

    fetchCargos();
  }, []);

  const handleClose = () => {
    onClose(); // Cerrar el formulario
    window.location.reload(); // Actualizar la página
  };

  const handleCrearTrabajador = async (e) => {
    e.preventDefault();
    const nuevoTrabajador = {
      nombre,
      telefono,
      direccion,
      id_cargo: selectedCargo.value, // Solo enviamos el valor seleccionado, no todo el objeto de opción
    };

    try {
      const response = await fetch('http://localhost:3000/trabajadores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoTrabajador),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      const responseData = await response.json();
      console.log('Respuesta:', responseData);

      // Mostrar notificación de éxito
      toast.success('Trabajador creado exitosamente');

      // Limpiar el formulario
      setNombre('');
      setTelefono('');
      setDireccion('');
      setSelectedCargo('');

    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Error al crear el Trabajador');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <h3 className="p-5 border-b-2 border-gray-200 w-full text-center">Agregar Nuevo Trabajador</h3>
        <ToastContainer/>
        <form className="bg-gray-100 p-5" onSubmit={handleCrearTrabajador}>
          <div className="block bg-gray-100 w-full h-full">
            <div className="block content-center p-5">
              <input
                className="w-full px-4 py-2 border rounded-lg"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre del Trabajador"
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
                placeholder="Teléfono del Trabajador"
                required
              />
            </div>
            <div className="block content-center p-5">
              <input
                className="w-full px-4 py-2 border rounded-lg"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                placeholder="Dirección del Trabajador"
                required
              />
            </div>
            <div className="block content-center p-5">
              <Select
                options={cargos}
                value={selectedCargo}
                onChange={setSelectedCargo}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Cargo del Trabajador"
                required
              />
            </div>
            <div className="flex content-center">
              <button
                type="button"
                onClick={handleClose}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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

export default FormularioTrabajador;
