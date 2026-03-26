import { createApiService } from "@/services/apiFactory.js";

/**
 * Servicios para la gestión de géneros de películas.
 * Utiliza apiFactory para proporcionar métodos CRUD.
 */
export const genreServices = createApiService("genre");

export const genresActive = createApiService("genre/active");

