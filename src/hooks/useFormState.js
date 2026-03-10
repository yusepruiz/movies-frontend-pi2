import { useState } from "react";

/**
 * Hook personalizado para centralizar el estado de formularios y peticiones HTTP.
 * Gestiona automáticamente el estado de carga (loading) y el estado de la respuesta (éxito/error).
 * 
 * @returns {Object} El estado y las funciones del hook.
 * @property {boolean} loading - Indica si hay una petición en curso.
 * @property {Object} responseState - Estado de la respuesta (success: boolean|null, message: string|null, error: string|null).
 * @property {Function} setResponseState - Función para actualizar manualmente el estado de la respuesta.
 * @property {Function} handleRequest - Función envolvente para ejecutar promesas y capturar errores automáticamente.
 */
export const useFormState = () => {
    const [loading, setLoading] = useState(false);
    const [responseState, setResponseState] = useState({ success: null, message: null, error: null });

    /**
     * Ejecuta una función asíncrona (petición) gestionando los estados de carga y error.
     * 
     * @param {Function} requestFn - Función que retorna una Promesa (ej: llamada a un servicio API).
     * @returns {Promise<Object>} La respuesta de la función ejecutada si tiene éxito.
     */
    const handleRequest = async (requestFn) => {
        try {
            setLoading(true);
            const response = await requestFn();
            setResponseState({
                success: response.submit || true,
                message: response.message,
                error: null
            });
            return response;
        } catch (error) {
            setResponseState({
                success: false,
                message: null,
                error: error.response?.data?.errors?.[0]?.message || "Error de servidor"
            });
        } finally {
            setLoading(false);
        }
    };

    return { loading, responseState, setResponseState, handleRequest };
};