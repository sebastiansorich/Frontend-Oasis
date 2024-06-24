import React from 'react'
import Card from '../componentes/card'


const Homepage = () => {




  return (
    <div className="bg-gray-100 w-full h-screen justify-center items-center ml-0 ">
      {/* <img src="/src/assets/Oasisl_logo.png" alt="Logo de la empresa" className=" w-max h-48 my-32" /> */}

      <h1 className="bg-gray-300 p-4 m-4  rounded-lg">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 m-5">
        <Card title="Clientes" icon="fa-users" url="https://backend-oasis.onrender.com/Clientes" color="bg-green-700" color2="bg-green-900" />
        <Card title="Trabajadores" icon="fa-user-tie" url="https://backend-oasis.onrender.com/Trabajadores" color="bg-blue-700" color2="bg-blue-900" />
        <Card title="Cargos" icon="fa-briefcase" url="https://backend-oasis.onrender.com/Cargos" color="bg-red-500" color2="bg-red-900" />
        <Card title="Productos" icon="fa-box-open " url="https://backend-oasis.onrender.com/Productos" color="bg-cyan-700" color2="bg-cyan-900" />
        <Card title="Proveedores" icon="fa-truck" url="https://backend-oasis.onrender.com/proveedores" color="bg-pink-700" color2="bg-pink-900" />
        <Card title="Notas de Entrega" icon="fa-file-alt" url="https://backend-oasis.onrender.com/notasEntrega" color="bg-orange-700" color2="bg-orange-900" />
        <Card title="NIT/CI" icon="fa-money-check-alt" url="https://backend-oasis.onrender.com/nit" color="bg-violet-700" color2="bg-violet-900" />
        <Card title="Pagos" icon="fa-id-card" url="https://backend-oasis.onrender.com/pagos" color="bg-green-700" color2="bg-green-900" />
        <Card title="Facturas" icon="fa-file-invoice-dollar" url="https://backend-oasis.onrender.com/facturas" color="bg-sky-700" color2="bg-sky-900" />
        
        <Card title="Notas de Pedido" icon="fa-clipboard-list" url="https://backend-oasis.onrender.com/notapedidocompra/" color="bg-cyan-700" color2="bg-cyan-900" />
      </div>
    </div>
  )
}

export default Homepage