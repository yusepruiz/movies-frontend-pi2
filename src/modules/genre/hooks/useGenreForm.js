import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { STATE_COLORS } from "@/constants/constants.js";
import { genreServices } from "@/modules/genre/services/genreServices.js";
import { useFormState } from "@/hooks/useFormState.js";

/**
 * Hook personalizado para gestionar la lógica del formulario de géneros.
 * Maneja el estado local (nombre, descripción, estado activo) y la comunicación con la API.
 * 
 * @returns {Object} El estado y las funciones necesarias para el formulario de género.
 * @property {string} name - Nombre del género.
 * @property {Function} setName - Función para actualizar el nombre.
 * @property {string} description - Descripción del género.
 * @property {Function} setDescription - Función para actualizar la descripción.
 * @property {boolean} isActive - Indica si el género está activo.
 * @property {string} colorIsActive - Color visual para el estado activo/inactivo.
 * @property {Function} toggleState - Función para alternar el estado activo.
 * @property {boolean} loading - Indica si hay un proceso de carga o envío en curso.
 * @property {Function} handleSubmit - Función manejadora para el envío del formulario.
 * @property {boolean} isEditMode - Indica si el formulario está en modo edición.
 * @property {Object} responseState - Estado de la respuesta del servidor (success, message, error).
 */
export const useGenreForm = () => {
    const { id } = useParams();
    const isEditMode = Boolean(id);
    const { loading, responseState, handleRequest } = useFormState();

    const [name, setName] = useState("");
    const [description, setDescription] = useState(""); // Nuevo estado para descripción
    const [isActive, setIsActive] = useState(false);
    const [colorIsActive, setColorIsActive] = useState(STATE_COLORS.INACTIVE);

    useEffect(() => {
        if (!isEditMode) return;

        const fetchGenre = async () => {
            try {
                const response = await genreServices.getById(id);
                const { name, state, description } = response.affectedRows[0];

                setName(name || "");
                setDescription(description || "");
                setIsActive(Boolean(state));
                setColorIsActive(state ? STATE_COLORS.ACTIVE : STATE_COLORS.INACTIVE);
            } catch (error) {
                console.error("Error al cargar el género:", error);
            }
        };

        fetchGenre();
    }, [id, isEditMode]);

    const toggleState = (checked) => {
        setIsActive(checked);
        setColorIsActive(checked ? STATE_COLORS.ACTIVE : STATE_COLORS.INACTIVE);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Incluimos la descripción en los datos a enviar
        const data = {
            id,
            name,
            description,
            state: isActive
        };

        await handleRequest(async () => {
            if (isEditMode) {
                return await genreServices.update(data);
            } else {
                const response = await genreServices.create(data);

                // Limpiamos todos los campos tras creación exitosa
                setName("");
                setDescription("");
                toggleState(false);
                return response;
            }
        });
    };

    return {
        name,
        setName,
        description,
        setDescription,
        isActive,
        colorIsActive,
        toggleState,
        loading,
        handleSubmit,
        isEditMode,
        responseState
    };
};