// componentes/SelectNotaEntrega.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { format } from "date-fns";

const SelectNotaEntrega2 = ({ value, onChange, className }) => {
    const [Notas, setNotas] = useState([]);

    useEffect(() => {
        axios.get('https://backend-oasis.onrender.com/notasEntrega/pendientes')
            .then(response => {
                const options = response.data.map(nota => ({
                    value: nota.id_nota_entrega,
                    label: ' ' + format(new Date(nota.fecha), 'dd/MM/') + ' a las ' + format(new Date(nota.fecha), 'HH:mm') + ' Con monto de ' + nota.total + 'BOB '
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
            onChange={option => onChange(option.value)}
            placeholder="Selecione la nota de entrega "
            className={className}
        />
    );
};

export default SelectNotaEntrega2;
