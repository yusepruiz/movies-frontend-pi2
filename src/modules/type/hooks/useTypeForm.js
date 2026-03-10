import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { typeServices } from "@/modules/type/services/typeServices";
import { useFormState } from "@/hooks/useFormState";

/**
 * Hook personalizado para gestionar la lógica del formulario de tipos de películas.
 * Maneja el estado local (nombre, eslogan, descripción, estado activo) y la comunicación con la API.
 * 
 * @returns {Object} El estado y las funciones necesarias para el formulario de tipos de películas.
 * @property {string} name - Nombre del tipo de película.
 * @property {Function} setName - Función para actualizar el nombre.
 * @property {string} description - Descripción del tipo de película.
 * @property {Function} setDescription - Función para actualizar la descripción.
 * @property {boolean} loading - Indica si hay un proceso de carga o envío en curso.
 * @property {Function} handleSubmit - Función manejadora para el envío del formulario.
 * @property {boolean} isEditMode - Indica si el formulario está en modo edición.
 * @property {Object} responseState - Estado de la respuesta del servidor (success, message, error).
 */
export const useTypeForm = () => {
    const { id } = useParams();
    const isEditMode = Boolean(id);
    const { loading, responseState, handleRequest } = useFormState();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (!isEditMode) return;

        const fetchType = async () => {
            try {
                const response = await typeServices.getById(id);
                const { name, description } = response.affectedRows[0];

                setName(name || "");
                setDescription(description || "");
            } catch (error) {
                console.error("Error al cargar el tipo de película:", error);
            }
        };

        fetchType();
    }, [id, isEditMode]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Incluimos la descripción en los datos a enviar
        const data = {
            id,
            name,
            description,
        };

        await handleRequest(async () => {
            if (isEditMode) {
                return await typeServices.update(data);
            } else {
                const response = await typeServices.create(data);

                // Limpiamos todos los campos tras creación exitosa
                setName("");
                setDescription("");
                return response;
            }
        });
    };

    return {
        name,
        setName,
        description,
        setDescription,
        loading,
        handleSubmit,
        isEditMode,
        responseState
    };
};