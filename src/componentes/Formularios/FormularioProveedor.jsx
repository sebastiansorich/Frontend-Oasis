// src/components/FormularioProveedor.jsx
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const FormularioProveedor = ({ onClose, onCrearProveedor }) => {
    const handleClose = () => {
        onClose(); // Cerrar el formulario
        window.location.reload(); // Actualizar la página
    };

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [pais, setPais] = useState('');

    const handleCrearProveedor = async (e) => {
        e.preventDefault();
        const nuevoProveedor = {
            nombre,
            correo,
            telefono,
            pais: pais.label, // Solo enviamos el valor seleccionado, no todo el objeto de opción
        };

        try {
            const response = await fetch('http://localhost:3000/proveedores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoProveedor),
            });

            if (!response.ok) {
                throw new Error('Error al enviar el formulario');
            }

            const responseData = await response.json();
            console.log('Respuesta:', responseData);

            // Mostrar notificación de éxito
            toast.success('Proveedor creado exitosamente');

            // Limpiar el formulario
            setCorreo('');
            setNombre('');
            setPais('');
            setTelefono('');


        } catch (error) {
            console.error('Error:', error.message);
            toast.error('Error al crear el Proveedor');
        }
    };


    const options = countryList().getData();

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
                <h3 className="p-5 border-b-2 border-gray-200 w-full text-center">Registrar Nuevo Proveedor</h3>
                <ToastContainer />
                <form className="bg-gray-100 p-5" onSubmit={handleCrearProveedor}>
                    <div className="block bg-gray-100 w-full h-full">
                        <div className="block content-center p-5">
                            <input
                                className="w-full px-4 py-2 border rounded-lg"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                placeholder="Nombre del Proveedor"
                                required
                            />
                        </div>
                        <div className="content-center p-5">
                            <input
                                className="w-full px-4 py-2 border rounded-lg"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                placeholder="Correo Electronico"
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
                                placeholder="Teléfono"
                                required
                            />
                        </div>
                        <div className="block content-center p-5">
                            <Select
                                options={options}
                                value={pais}
                                onChange={setPais}
                                className='w-full ml-2 mr-2 mb-2'
                                placeholder="Pais"
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

export default FormularioProveedor;
