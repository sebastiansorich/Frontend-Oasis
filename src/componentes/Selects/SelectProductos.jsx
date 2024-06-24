import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const SelectProductos = ({ value, onChange, className }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('https://backend-oasis.onrender.com/productos')
            .then(response => {
                const options = response.data.map(producto => ({
                    value: producto.id_Producto,
                    label: producto.nombre
                }));
                setProductos(options);
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
            });
    }, []);

    return (
        <Select
            options={productos}
            value={value ? productos.find(option => option.value === value) : null}
            onChange={option => onChange(option.value)}
            className={className}
        />
    );
};

export default SelectProductos;
