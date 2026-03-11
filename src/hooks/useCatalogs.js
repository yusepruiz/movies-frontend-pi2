import { useState, useEffect } from "react";
import { genreServices } from "@/modules/genre/services/genreServices";
import { directorServices } from "@/modules/director/services/directorServices";
import { producerServices } from "@/modules/producer/services/producerServices";
import { typeServices } from "@/modules/type/services/typeServices";

/**
 * Hook personalizado para cargar todos los catálogos necesarios de la aplicación.
 * Realiza peticiones en paralelo a los servicios de géneros, directores, productoras y tipos.
 * 
 * @returns {Object} Un objeto que contiene los listados de cada catálogo y el estado de carga.
 * @property {Array} genres - Lista de géneros.
 * @property {Array} directors - Lista de directores.
 * @property {Array} producers - Lista de productoras.
 * @property {Array} types - Lista de tipos.
 * @property {boolean} loading - Indica si la carga de los catálogos está en curso.
 */
export const useCatalogs = () => {
    const [catalogs, setCatalogs] = useState({
        genres: [],
        directors: [],
        producers: [],
        types: [],
        loading: true // Añadimos un estado de carga por si lo necesitas
    });

    useEffect(() => {
        const loadCatalogs = async () => {
            try {
                const [g, d, p, t] = await Promise.all([
                    genreServices.getAll(),
                    directorServices.getAll(),
                    producerServices.getAll(),
                    typeServices.getAll()
                ]);

                setCatalogs({
                    genres: g.affectedRows || g,
                    directors: d.affectedRows || d,
                    producers: p.affectedRows || p,
                    types: t.affectedRows || t,
                    loading: false
                });
            } catch (error) {
                console.error("Error cargando catálogos:", error);
                setCatalogs(prev => ({ ...prev, loading: false }));
            }
        };

        loadCatalogs();
    }, []);

    return catalogs;
};