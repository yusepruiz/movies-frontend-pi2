import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { STATE_COLORS } from "@/constants/constants";
import { genderServices } from "@/modules/gender/services/genderServices";
import { useFormState } from "@/hooks/useFormState";

export const useGenderForm = () => {
    const { id } = useParams();
    const isEditMode = Boolean(id);
    const { loading, responseState, handleRequest } = useFormState();

    const [name, setName] = useState("");
    const [description, setDescription] = useState(""); // Nuevo estado para descripción
    const [isActive, setIsActive] = useState(false);
    const [colorIsActive, setColorIsActive] = useState(STATE_COLORS.INACTIVE);

    useEffect(() => {
        if (!isEditMode) return;

        const fetchGender = async () => {
            try {
                const response = await genderServices.getById(id);
                const { name, state, description } = response.affectedRows[0];

                setName(name || "");
                setDescription(description || "");
                setIsActive(Boolean(state));
                setColorIsActive(state ? STATE_COLORS.ACTIVE : STATE_COLORS.INACTIVE);
            } catch (error) {
                console.error("Error al cargar el género:", error);
            }
        };

        fetchGender();
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
                return await genderServices.update(data);
            } else {
                const response = await genderServices.create(data);
                
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