import axios from "axios";

const API_URL = "http://localhost:4000/api/director";

/**
 * Servicios para la gestión de directores a través de la API.
 */
export const directorServices = {
    /**
     * Crea un nuevo director en el sistema.
     * @param {Object} data - Datos del director (nombre, estado).
     * @returns {Promise<Object>} - Datos del director creado devueltos por la API.
     */
    createDirector: async (data) => {
        const response = await axios.post(API_URL, data);
        return response.data;
    },
    /**
     * Actualiza la información de un director existente.
     * @param {Object} data - Datos del director a actualizar (debe incluir el id).
     * @returns {Promise<Object>} - Datos corregidos devueltos por la API.
     */
    updateDirector: async (data) => {
        const response = await axios.patch(`${API_URL}/${data.id}`, data);
        return response.data;
    },
    /**
     * Elimina un director (Nota: El backend podría requerir ajustes para esta operación).
     * @param {Object} data - Datos para identificar el director a eliminar.
     * @returns {Promise<Object>} - Confirmación de la eliminación.
     */
    deleteDirector: async (data) => {
        const response = await axios.delete(API_URL, data);
        return response.data;
    },
    /**
     * Obtiene los detalles de un director específico por su ID.
     * @param {string|number} id - Identificador único del director.
     * @returns {Promise<Object>} - Objeto con la información del director.
     */
    getDirector: async (id) => {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    },
    /**
     * Recupera la lista completa de directores registrados.
     * @returns {Promise<Array|Object>} - Listado de directores.
     */
    getDirectors: async () => {
        const response = await axios.get(API_URL);
        return response.data;
    },
};