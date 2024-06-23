// DataServiceProductos.js

import axios from 'axios';

class DataServiceProductos {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getProductos() {
    try {
      const response = await axios.get(`${this.baseUrl}/productos`);
      return response.data;
    } catch (error) {
      console.error('Error fetching productos:', error);
      throw error;
    }
  }
}

export default DataServiceProductos;
