// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./componentes/Sidebar";
import Homepage from "./pages/Homepage";
import GestionarProductos from "./pages/GestionarProductos";
import GestionarTrabajadores from "./pages/GestionarTrabajadores";
import GestionarClientes from "./pages/GestionarClientes";
import GestionarProveedores from "./pages/GestionarProveedores";
import GestionarNotasEntrega from "./pages/GestionarNotasEntrega";
import GestionarNIT from "./pages/GestionarNIT";
import GestionarPagos from "./pages/GestionarPagos";
import GestionarFacturasVenta from "./pages/GestionarFacturasVenta";
import GestionarNotaPedido from "./pages/GestionarNotaPedido";

import './styles.css';
import GestionarCargos from './pages/GestionarCargos';

export default function App() {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    const fetchProveedores = async () => {
      try {
        const response = await fetch("http://localhost:3000/proveedores");
        const data = await response.json();
        setProveedores(data);
        console.log('Proveedores fetched:', data);
      } catch (error) {
        console.error('Error fetching proveedores:', error);
      }
    };

    fetchProveedores();
  }, []);
  return (
    <div className="w-full h-full flex flex-col">
    <BrowserRouter>
      <div className="flex flex-grow">
        <Sidebar />
        <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/GestionarProductos" element={<GestionarProductos proveedores={proveedores} />} />
              <Route path="/GestionarTrabajadores" element={<GestionarTrabajadores />} />
              <Route path="/GestionarClientes" element={<GestionarClientes />} />
              <Route path="/GestionarProveedores" element={<GestionarProveedores />} />
              <Route path="/GestionarNotasEntrega" element={<GestionarNotasEntrega />} />
              <Route path="/GestionarNIT" element={<GestionarNIT />} />
              <Route path="/GestionarPagos" element={<GestionarPagos />} />
              <Route path="/GestionarFactura" element={<GestionarFacturasVenta />} />
              <Route path="/GestionarNotaPedido" element={<GestionarNotaPedido />} />
              <Route path="/Gestionarcargos" element={ <GestionarCargos/>} />
              
            </Routes>
          </div>
        
      </BrowserRouter>
    </div>
  );
}
