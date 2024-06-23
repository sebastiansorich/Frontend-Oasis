// DataServiceProveedores.js

import axios from 'axios';

class DataServiceProveedores {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;

  }

  async getProveedores() {
    try {
      const response = await axios.get(`${this.baseUrl}/proveedores`);
      return response.data;
    } catch (error) {
      console.error('Error fetching proveedores:', error);
      throw error;
    }
  }

  async getNombreProveedor(idProveedor) {
    try {
      const response = await axios.get(`${this.baseUrl}/proveedores/${idProveedor}`);
      return response.data.nombre;
    } catch (error) {
      console.error(`Error fetching nombre del proveedor con ID ${idProveedor}:`, error);
      return 'Proveedor Desconocido';
    }
  }
}

export default DataServiceProveedores;
