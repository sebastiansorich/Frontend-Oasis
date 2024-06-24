// componentes/SelectClientes.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const SelectClientes = ({ value, onChange, className }) => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        axios.get('https://backend-oasis.onrender.com/clientes')
            .then(response => {
                const options = response.data.map(cliente => ({
                    value: cliente.id_cliente,
                    label: cliente.nombre
                }));
                setClientes(options);
            })
            .catch(error => {
                console.error('Error al obtener los clientes:', error);
            });
    }, []);

    return (
        <Select
            options={clientes}
            value={clientes.find(option => option.value === value)}
            onChange={option => onChange(option.value)}
            className={className}
        />
    );
};

export default SelectClientes;
