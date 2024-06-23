// Retrieve data from a specific endpoint

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/user';

// Function to get information from the API
export const getInfo = async () => {
    const response = await axios.get(`${API_URL}/getData`);
    return response.data;
};
