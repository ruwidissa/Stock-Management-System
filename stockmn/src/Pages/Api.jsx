import axios from 'axios';

const API_URL = 'http://localhost:8080/api/user';

export const getInfo = async () => {
    const response = await axios.get(`${API_URL}/getData`);
    return response.data;
};
