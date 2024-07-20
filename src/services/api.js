// src/services/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:9876';

export const fetchNumbers = async (type) => {
  try {
    const response = await axios.post(`${BASE_URL}/numbers/${type}`, {}, { timeout: 500 });
    return response.data;
  } catch (error) {
    console.error('Error fetching numbers', error);
    return null;
  }
};