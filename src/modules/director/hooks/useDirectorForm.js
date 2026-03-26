import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { STATE_COLORS } from "@/constants/constants.js";
import { directorServices } from "@/modules/director/services/directorServices.js";
import { useFormState } from "@/hooks/useFormState.js";

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

    const { loading, responseState, handleRequest } = useFormState();

    const [name, setName] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [colorIsActive, setColorIsActive] = useState(STATE_COLORS.INACTIVE);

    useEffect(() => {

        if (!isEditMode) return;

        /**
         * Obtiene los datos del director desde el servidor si estamos en modo edición.
         */
        const fetchDirector = async () => {
            const director = await directorServices.getById(id);
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

        const data = {
            id,
            name,
            state: isActive
        };

        await handleRequest(async () => {
            if (isEditMode) return await directorServices.update(data);

            const response = await directorServices.create(data);
            setName(""); // Limpiar solo si es creación
            setIsActive(false);
            return response;
        });
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