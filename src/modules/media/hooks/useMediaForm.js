import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useFormState } from "@/hooks/useFormState.js";
import { mediaServices } from "../services/mediaServices.js";
 
// servicios para llenar los selects
import { genreServices } from "@/modules/genre/services/genreServices.js";
import { directorServices } from "@/modules/director/services/directorServices.js";
import { producerServices } from "@/modules/producer/services/producerServices.js";
import { typeServices } from "@/modules/type/services/typeServices.js";

const initialFormState = {
    title: "",
    synopsis: "",
    url: "",
    image: "",
    release_year: "",
    genre_id: "",
    director_id: "",
    producer_id: "",
    type_id: ""
};

/**
 * Hook personalizado para gestionar el estado y la lógica del formulario de Películas/Series.
 * Maneja la carga de catálogos filtrados por activos, datos iniciales en edición y envío de formulario.
 * 
 * @returns {Object} El estado y las funciones para el formulario de Multimedia.
 * @property {Object} formData - Los valores actuales de los campos del formulario.
 * @property {Function} handleInputChange - Manejador universal para cambios en los inputs.
 * @property {Array} genres - Catálogo de géneros activos.
 * @property {Array} directors - Catálogo de directores activos.
 * @property {Array} producers - Catálogo de productoras activas.
 * @property {Array} types - Catálogo de tipos activos.
 * @property {boolean} loading - Estado de carga global.
 * @property {Object} responseState - Resultado de la última petición al servidor.
 * @property {Function} handleSubmit - Función para procesar el envío del formulario.
 * @property {boolean} isEditMode - Indica si se está editando una producción existente.
 */
export const useMediaForm = () => {
    const { id } = useParams();
    const isEditMode = Boolean(id);
    const { loading, responseState, handleRequest } = useFormState();

    // 1. Estado para los catálogos (Selects)
    const [catalogs, setCatalogs] = useState({
        genres: [],
        directors: [],
        producers: [],
        types: []
    });

    // 2. Estado unificado para el formulario
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        const loadInitialData = async () => {
            try {
                // 1. Peticiones en paralelo
                const [g, d, p, t] = await Promise.all([
                    genreServices.getAll(),
                    directorServices.getAll(),
                    producerServices.getAll(),
                    typeServices.getAll()
                ]);

                // 2. Aplicamos el filtro de "ACTIVOS" antes de guardar en el estado
                // Asumiendo que 'state' viene como 1 (activo) o 0 (inactivo)
                setCatalogs({
                    genres: (g.affectedRows || g).filter(item => Boolean(item.state)),
                    directors: (d.affectedRows || d).filter(item => Boolean(item.state)),
                    producers: (p.affectedRows || p).filter(item => Boolean(item.state)),
                    types: t.affectedRows
                });

                // 3. Carga de datos si es edición
                if (isEditMode) {
                    try {
                        const response = await mediaServices.getById(id);
                        const mediaData = response.affectedRows ? response.affectedRows[0] : response;

                        setFormData({
                            title: mediaData.title || "",
                            synopsis: mediaData.synopsis || "",
                            url: mediaData.url || "",
                            image: mediaData.image || "",
                            release_year: mediaData.release_year || "",
                            genre_id: mediaData.genre_id || "",
                            director_id: mediaData.director_id || "",
                            producer_id: mediaData.producer_id || "",
                            type_id: mediaData.type_id || ""
                        });
                    } catch (error) {
                        console.error("Error al cargar media para editar", error);
                    }
                }
            } catch (error) {
                console.error("Error cargando datos iniciales:", error);
            }
        };

        loadInitialData();
    }, [id, isEditMode]);

    // Manejador de cambios universal para todos los inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Si el campo es el año, no permitimos más de 4 caracteres
        if (name === "release_year" && value.length > 4) {
            return; // No actualizamos el estado si intenta escribir un 5to dígito
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleRequest(async () => {
            if (isEditMode) {
                return await mediaServices.update({ id, ...formData });
            } else {
                const response = await mediaServices.create(formData);

                // Limpiar formulario tras crear
                setFormData(initialFormState);

                return response;
            }
        });
    };

    return {
        formData,
        handleInputChange,
        ...catalogs, // Esparcir genres, directors, etc.
        loading,
        responseState,
        handleSubmit,
        isEditMode
    };
};