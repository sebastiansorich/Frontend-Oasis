// componentes/SelectTrabajadores.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const SelectTrabajadores = ({ value, onChange, className }) => {
    const [trabajadores, setTrabajadores] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/trabajadores')
            .then(response => {
                const options = response.data.map(trabajador => ({
                    value: trabajador.id_trabajador,
                    label: trabajador.nombre
                }));
                setTrabajadores(options);
            })
            .catch(error => {
                console.error('Error al obtener los trabajadores:', error);
            });
    }, []);

    return (
        <Select
            options={trabajadores}
            value={trabajadores.find(option => option.value === value)}
            onChange={option => onChange(option.value)}
            className={className}
        />
    );
};

export default SelectTrabajadores;
