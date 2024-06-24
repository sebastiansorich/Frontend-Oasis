// componentes/SelectClientes.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const SelectProveedores = ({ value, onChange, className }) => {
    const [Proveedores, setClientes] = useState([]);

    useEffect(() => {
        axios.get('https://backend-oasis.onrender.com/proveedores')
            .then(response => {
                const options = response.data.map(proveedor => ({
                    value: proveedor.id_Proveedor,
                    label: proveedor.nombre
                }));
                setClientes(options);
            })
            .catch(error => {
                console.error('Error al obtener los clientes:', error);
            });
    }, []);

    return (
        <Select
            options={Proveedores}
            value={Proveedores.find(option => option.value === value)}
            onChange={option => onChange(option.value)}
            className={className}
        />
    );
};

export default SelectProveedores;
