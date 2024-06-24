// componentes/SelectClientes.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const SelectNIT = ({ value, onChange, className }) => {
    const [NITs, setNITs] = useState([]);

    useEffect(() => {
        axios.get('https://backend-oasis.onrender.com/nit')
            .then(response => {
                const options = response.data.map(nit => ({
                    value: nit.nit,
                    label: nit.nombre_cliente
                }));
                setNITs(options);
            })
            .catch(error => {
                console.error('Error al obtener los clientes:', error);
            });
    }, []);

    return (
        <Select
            options={NITs}
            value={NITs.find(option => option.value === value)}
            onChange={option => onChange(option ? option.value : '')}
            className={className}
        />
    );
};

export default SelectNIT;
