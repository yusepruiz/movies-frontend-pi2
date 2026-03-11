import axios from "axios";

/**
 * Generador de servicios CRUD genérico para evitar repetición de código.
 * Proporciona métodos estandarizados para interactuar con una API REST.
 * 
 * @param {string} endpoint - El nombre del recurso (ej: 'director', 'genre').
 * @returns {Object} Un objeto con métodos CRUD (create, update, delete, getById, getAll).
 */
export const createApiService = (endpoint) => {
    const API_URL = `http://localhost:4000/api/${endpoint}`;

    return {
        /**
         * Crea un nuevo registro en el servidor.
         * @param {Object} data - Los datos del objeto a crear.
         * @returns {Promise<Object>} La respuesta del servidor con el objeto creado.
         */
        create: async (data) => {
            const response = await axios.post(API_URL, data);
            return response.data;
        },
        /**
         * Actualiza un registro existente mediante el ID contenido en la data.
         * @param {Object} data - Objeto con los datos actualizados (debe incluir la propiedad id).
         * @returns {Promise<Object>} La respuesta del servidor tras la actualización.
         */
        update: async (data) => {
            const response = await axios.patch(`${API_URL}/${data.id}`, data);
            return response.data;
        },
        /**
         * Elimina un registro por su identificador único.
         * @param {string|number} id - El ID del registro a eliminar.
         * @returns {Promise<Object>} Confirmación de la eliminación.
         */
        delete: async (id) => {
            const response = await axios.delete(`${API_URL}/${id}`);
            return response.data;
        },
        /**
         * Recupera un registro específico por su ID.
         * @param {string|number} id - El ID del recurso a consultar.
         * @returns {Promise<Object>} El objeto encontrado.
         */
        getById: async (id) => {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
        },
        /**
         * Recupera listado completo de registros para este recurso.
         * @returns {Promise<Array|Object>} Array de objetos o respuesta paginada.
         */
        getAll: async () => {
            const response = await axios.get(API_URL);
            return response.data;
        },
    };
};