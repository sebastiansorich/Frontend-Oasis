// componentes/SelectNotaEntrega.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const SelectNotaEntrega = ({ value, onChange, className }) => {
    const [Notas, setNotas] = useState([]);

    useEffect(() => {
        axios.get('https://backend-oasis.onrender.com/notasEntrega')
            .then(response => {
                const options = response.data.map(nota => ({
                    value: nota.id_nota_entrega,
                    label: nota.fecha
                }));
                setNotas(options);
            })
            .catch(error => {
                console.error('Error al obtener las Notas:', error);
            });
    }, []);

    return (
        <Select
            options={Notas}
            value={Notas.find(option => option.value === value)}
            onChange={option => onChange(option)}
            className={className}
        />
    );
};

export default SelectNotaEntrega;
