import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { STATE_COLORS } from "@/constants/constants";
import { producerServices } from "@/modules/producer/services/producerServices";
import { useFormState } from "@/hooks/useFormState";

/**
 * Hook personalizado para gestionar la lógica del formulario de productores.
 * Maneja el estado local (nombre, eslogan, descripción, estado activo) y la comunicación con la API.
 * 
 * @returns {Object} El estado y las funciones necesarias para el formulario de productor.
 * @property {string} name - Nombre del productor.
 * @property {Function} setName - Función para actualizar el nombre.
 * @property {string} slogan - Frase identificadora o eslogan para el productor.
 * @property {Function} setSlogan - Función para actualizar el eslogan.
 * @property {string} description - Descripción del productor.
 * @property {Function} setDescription - Función para actualizar la descripción.
 * @property {boolean} isActive - Indica si el productor está activo.
 * @property {string} colorIsActive - Color visual para el estado activo/inactivo.
 * @property {Function} toggleState - Función para alternar el estado activo.
 * @property {boolean} loading - Indica si hay un proceso de carga o envío en curso.
 * @property {Function} handleSubmit - Función manejadora para el envío del formulario.
 * @property {boolean} isEditMode - Indica si el formulario está en modo edición.
 * @property {Object} responseState - Estado de la respuesta del servidor (success, message, error).
 */
export const useProducerForm = () => {
    const { id } = useParams();
    const isEditMode = Boolean(id);
    const { loading, responseState, handleRequest } = useFormState();

    const [name, setName] = useState("");
    const [slogan, setSlogan] = useState("");
    const [description, setDescription] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [colorIsActive, setColorIsActive] = useState(STATE_COLORS.INACTIVE);

    useEffect(() => {
        if (!isEditMode) return;

        const fetchProducer = async () => {
            try {
                const response = await producerServices.getById(id);
                const { name, state, slogan, description } = response.affectedRows[0];

                setName(name || "");
                setSlogan(slogan || "");
                setDescription(description || "");
                setIsActive(Boolean(state));
                setColorIsActive(state ? STATE_COLORS.ACTIVE : STATE_COLORS.INACTIVE);
            } catch (error) {
                console.error("Error al cargar el productor:", error);
            }
        };

        fetchProducer();
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
            slogan,
            description,
            state: isActive
        };

        await handleRequest(async () => {
            if (isEditMode) {
                return await producerServices.update(data);
            } else {
                const response = await producerServices.create(data);

                // Limpiamos todos los campos tras creación exitosa
                setName("");
                setSlogan("");
                setDescription("");
                toggleState(false);
                return response;
            }
        });
    };

    return {
        name,
        setName,
        slogan,
        setSlogan,
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