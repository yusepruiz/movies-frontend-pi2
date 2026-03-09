import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { STATE_COLORS } from "@/constants/constants";
import { directorServices } from "@/modules/director/services/directorServices";

/**
 * Hook personalizado para gestionar la lógica del formulario de directores.
 * Maneja tanto la creación como la actualización de directores, centralizando
 * el estado, la validación y el envío de datos.
 * 
 * @returns {Object} Un objeto con el estado y las funciones necesarias para el formulario.
 * @property {string} name - El nombre actual del director.
 * @property {Function} setName - Función para actualizar el nombre.
 * @property {boolean} isActive - Indica si el director está activo.
 * @property {string} colorIsActive - El color hexadecimal correspondiente al estado activo/inactivo.
 * @property {Function} toggleState - Función para cambiar el estado de activo.
 * @property {boolean} loading - Indica si hay una operación asíncrona en curso.
 * @property {Function} handleSubmit - Manejador para el envío del formulario.
 * @property {boolean} isEditMode - Indica si el formulario está en modo edición (si hay un ID en la URL).
 * @property {Object} responseState - El estado de la respuesta del servidor (éxito, mensaje, error).
 */
export const useDirectorForm = () => {

    const { id } = useParams();
    const isEditMode = Boolean(id);

    const [name, setName] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [colorIsActive, setColorIsActive] = useState(STATE_COLORS.INACTIVE);
    const [loading, setLoading] = useState(false);

    const [responseState, setResponseState] = useState({
        success: null,
        message: null,
        error: null
    });

    useEffect(() => {

        if (!isEditMode) return;

        /**
         * Obtiene los datos del director desde el servidor si estamos en modo edición.
         */
        const fetchDirector = async () => {
            const director = await directorServices.getDirector(id);
            const { name, state } = director.affectedRows[0];

            setName(name);
            setIsActive(Boolean(state));
            setColorIsActive(
                state
                    ? STATE_COLORS.ACTIVE
                    : STATE_COLORS.INACTIVE
            );
        };

        fetchDirector();

    }, [id, isEditMode]);

    /**
     * Alterna el estado de activación del director y actualiza el color visual.
     * 
     * @param {boolean} checked - El nuevo estado del switch.
     */
    const toggleState = (checked) => {

        setIsActive(checked);

        setColorIsActive(
            checked
                ? STATE_COLORS.ACTIVE
                : STATE_COLORS.INACTIVE
        );
    };

    /**
     * Procesa el envío del formulario (Creación o Actualización).
     * 
     * @param {React.FormEvent} e - El evento de envío del formulario.
     */
    const handleSubmit = async (e) => {

        e.preventDefault();

        let response;

        const data = {
            id,
            name,
            state: isActive
        };

        try {

            setLoading(true);

            if (isEditMode) {

                response = await directorServices.updateDirector(data);

            } else {

                response = await directorServices.createDirector(data);

                setName("");
                toggleState(false);
            }

            setResponseState({
                success: response.submit,
                message: response.message,
                error: null
            });

        } catch (error) {

            console.error("Error:", error);

            setResponseState({
                success: false,
                message: null,
                error:
                    error.response?.data?.errors?.[0]?.message ||
                    "Error al conectar con el servidor"
            });

        } finally {

            setLoading(false);
        }
    };

    return {
        name,
        setName,
        isActive,
        colorIsActive,
        toggleState,
        loading,
        handleSubmit,
        isEditMode,
        responseState
    };
};