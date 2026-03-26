import { createApiService } from "@/services/apiFactory.js";

/**
 * Servicios para la gestión de productores de películas.
 * Utiliza apiFactory para proporcionar métodos CRUD.
 */
export const producerServices = createApiService("producer");

export const producersActive = createApiService("producer/active");