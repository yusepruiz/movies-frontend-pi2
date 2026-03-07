import { useActionState } from "react";

import { directorServices } from "@/modules/director/services/directorServices";

const INITIAL_STATE = { success: false, message: null, error: null };

/**
 * Hook para manejar las acciones de los directores
 * @returns {Object} - Objeto con los estados y acciones para crear un director
 */

export const useDirectorActions = () => {

    /**
     * Hook para manejar las acciones de los directores
     * @param {Object} prevState - Estado anterior
     * @param {FormData} formData - Datos del formulario
     * @returns {Object} - Objeto con los estados y acciones para crear un director
     */
    const [createState, createAction, isCreating] = useActionState(
        async (prevState, formData) => {
            // 1. Extraer los datos con los 'name' exactos de los inputs
            const nameValue = formData.get("name");
            const stateValue = formData.get("state") === "true";

            console.log("Intentando enviar:", { name: nameValue, state: stateValue });

            const data = { name: nameValue, state: stateValue };

            try {
                const response = await directorServices.createDirector(data);

                console.log("Servidor respondió con éxito:", response);

                // Retornamos éxito para que isPending pase a false
                return { success: response.success, message: response.message, error: null };

            } catch (err) {
                // 3. Capturamos el error para que el botón se desbloquee
                console.error("Error en la petición:", err);

                return {
                    success: false,
                    message: null,
                    // Extraemos el mensaje de Zod o el error de red
                    error: err.response?.data?.errors?.[0]?.message || "Error al conectar con el servidor"
                };
            }
        },
        INITIAL_STATE
    );

    /**
     * Hook para manejar las acciones de los directores
     * @param {Object} prevState - Estado anterior
     * @param {FormData} formData - Datos del formulario
     * @returns {Object} - Objeto con los estados y acciones para actualizar un director
     */
    const [updateState, updateAction, isUpdating] = useActionState(
        async (prevState, formData) => {
            const nameValue = formData.get("name");
            const stateValue = formData.get("state") === "true";
            const idValue = formData.get("id");

            console.log("Intentando enviar:", { id: idValue, name: nameValue, state: stateValue });

            const data = { id: idValue, name: nameValue, state: stateValue };

            try {
                const response = await directorServices.updateDirector(data);

                console.log("Servidor respondió con éxito:", response);

                // Retornamos éxito para que isPending pase a false
                return { success: response.success, message: response.message, error: null };

            } catch (err) {
                // 3. Capturamos el error para que el botón se desbloquee
                console.error("Error en la petición:", err);

                return {
                    success: false,
                    message: null,
                    // Extraemos el mensaje de Zod o el error de red
                    error: err.response?.data?.errors?.[0]?.message || "Error al conectar con el servidor"
                };
            }
        },
        INITIAL_STATE
    );

    return { createState, createAction, isCreating, updateState, updateAction, isUpdating };
}