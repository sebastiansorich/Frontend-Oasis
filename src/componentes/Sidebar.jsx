import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../pages/Footer';
import imagen from '../assets/microndasnaranja.png'; //// Ruta de la imagen local



const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    const storedSelectedItem = localStorage.getItem('selectedItem');
    if (storedSelectedItem !== null) {
      setSelectedItem(parseInt(storedSelectedItem));
    }
  }, []);

  const handleItemClick = (index) => {
    setSelectedItem(index);
    localStorage.setItem('selectedItem', index.toString());
  };

  const isActive = (index) => {
    return selectedItem === index;
  };

  return (
    <div className="text-white w-1/5 h-screen flex fixed justify-center content-center" style={{ backgroundColor: '#333333' }}>
      <div className="w-full">
        {/* Logo de la empresa */}
        <div className="flex items-center justify-start px-4 py-2 border-b border-gray-600">
          {/* Icono de microondas */}
          <div className="flex items-center justify-center h-12 w-12  text-white runded-full">
            <img src={imagen} alt="Descripción de la imagen" />

          </div>
          {/* Texto de la empresa */}
          <div className="ml-4">
            <h1 className="text-lg font-bold">Oasis</h1>
            <h2 className="text-sm">Electrodomésticos</h2>
          </div>
        </div>
        <hr className="border-gray-600" />
        <ul className="p-2 mt-1 fixed content-center w-1/5 text-center flex-col">
          <li className="cursor-pointer">
            <Link to="/" className={`flex hover:bg-neutral-600 ${isActive(0) && 'bg-neutral-600 text-orange-500'}`} onClick={() => handleItemClick(0)}>
              <i className="fas fa-home p-2.5"></i>
              <span className="block py-2 pl-1">Dashboard</span>
            </Link>
          </li>
          <hr className="border-gray-600" />
          <li className="cursor-pointer">
            <label className="text-left block text-sm text-gray-400 pl-2 mt-2">Suministros</label>
            <ul>
              <Link to="/GestionarProductos" className={`flex hover:bg-neutral-600 ${isActive(1) && 'bg-neutral-600 text-orange-500'}`} onClick={() => handleItemClick(1)}>
                <li className="cursor-pointer flex items-center mt-1 content-center">
                  <i className="fas fa-box-open p-2"></i>
                  <span className="block py-2 pl-1">Productos</span>
                </li>
              </Link>
              <Link to="/GestionarProveedores" className={`flex hover:bg-neutral-600 ${isActive(4) && 'bg-neutral-600 text-orange-500'}`} onClick={() => handleItemClick(4)}>
                <li className="cursor-pointer flex items-center mt-1 content-center">
                  <i className="fas fa-truck p-2"></i>
                  <span className="block py-2 pl-1">Proveedores</span>
                </li>
              </Link>
              <Link to="/GestionarNotaPedido" className={`flex hover:bg-neutral-600 ${isActive(9) && 'bg-neutral-600 text-orange-500'}`} onClick={() => handleItemClick(9)}>
                <li className="cursor-pointer flex items-center mt-1 content-center">
                  <i className="fas fa-clipboard-list p-2"></i>
                  <span className="block py-2 pl-1">Notas de Pedido</span>
                </li>
              </Link>
            </ul>
          </li>
          <hr className="border-gray-600" />
          <li className="cursor-pointer">
            <label className="text-left block text-sm text-gray-400 pl-2 mt-2">Ventas</label>
            <ul>
              <Link to="/GestionarNotasEntrega" className={`flex hover:bg-neutral-600 ${isActive(6) && 'bg-neutral-600 text-orange-500'}`} onClick={() => handleItemClick(6)}>
                <li className="cursor-pointer flex items-center mt-1 content-center">
                  <i className="fas fa-file-alt p-2"></i>
                  <span className="block py-2 pl-1">Notas de Entrega</span>
                </li>
              </Link>
              <Link to="/GestionarPagos" className={`flex hover:bg-neutral-600 ${isActive(7) && 'bg-neutral-600 text-orange-500'}`} onClick={() => handleItemClick(7)}>
                <li className="cursor-pointer flex items-center mt-1 content-center">
                  <i className="fas fa-money-check-alt p-2"></i>
                  <span className="block py-2 pl-1">Pagos</span>
                </li>
              </Link>
              <Link to="/GestionarFactura" className={`flex hover:bg-neutral-600 ${isActive(8) && 'bg-neutral-600 text-orange-500'}`} onClick={() => handleItemClick(8)}>
                <li className="cursor-pointer flex items-center mt-1 content-center">
                  <i className="fas fa-file-invoice-dollar p-2"></i>
                  <span className="block py-2 pl-1">Facturas</span>
                </li>
              </Link>
            </ul>
          </li>
          <hr className="border-gray-600" />
          <li className="cursor-pointer">
            <label className="text-left block text-sm text-gray-400 pl-2 mt-2">Clientes</label>
            <ul>
              <Link to="/GestionarClientes" className={`flex hover:bg-neutral-600 ${isActive(3) && 'bg-neutral-600 text-orange-500'}`} onClick={() => handleItemClick(3)}>
                <li className="cursor-pointer flex items-center mt-1 content-center">
                  <i className="fas fa-users p-2"></i>
                  <span className="block py-2 pl-1">Clientes</span>
                </li>
              </Link>

              <Link to="/GestionarNIT" className={`flex hover:bg-neutral-600 ${isActive(10) && 'bg-neutral-600 text-orange-500'}`} onClick={() => handleItemClick(10)}>
                <li className="cursor-pointer flex items-center mt-1 content-center">
                  <i className="fas fa-money-check-alt p-2"></i>
                  <span className="block py-2 pl-1">Nit</span>
                </li>
              </Link>
             
            </ul>
          </li>
          <li className="cursor-pointer">
            <label className="text-left block text-sm text-gray-400 pl-2 mt-2"> Trabajadores</label>
            <ul>
              <Link to="/GestionarTrabajadores" className={`flex hover:bg-neutral-600 ${isActive(2) && 'bg-neutral-600 text-orange-500'}`} onClick={() => handleItemClick(2)}>
                <li className="cursor-pointer flex items-center mt-1 content-center">
                  <i className="fas fa-user-tie p-2"></i>
                  <span className="block py-2 pl-1">Trabajadores</span>
                </li>
              </Link>
              <Link to="/Gestionarcargos" className={`flex hover:bg-neutral-600 ${isActive(11) && 'bg-neutral-600 text-orange-500'}`} onClick={() => handleItemClick(11)}>
                <li className="cursor-pointer flex items-center mt-1 content-center">
                  <i className="fas fa-briefcase p-2"></i>
                  <span className="block py-2 pl-1">cargos</span>
                </li>
              </Link>
            </ul>
          </li>
          <Footer />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
