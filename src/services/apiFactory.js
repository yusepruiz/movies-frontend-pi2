import axios from "axios";

/**
 * Generador de servicios CRUD genérico para evitar repetición de código.
 * @param {string} endpoint - El nombre del recurso (ej: 'director', 'gender').
 */
export const createApiService = (endpoint) => {
    const API_URL = `http://localhost:4000/api/${endpoint}`;

    return {
        create: async (data) => {
            const response = await axios.post(API_URL, data);
            return response.data;
        },
        update: async (data) => {
            const response = await axios.patch(`${API_URL}/${data.id}`, data);
            return response.data;
        },
        delete: async (id) => {
            const response = await axios.delete(`${API_URL}/${id}`);
            return response.data;
        },
        getById: async (id) => {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
        },
        getAll: async () => {
            const response = await axios.get(API_URL);
            return response.data;
        },
    };
};