import { createApiService } from "@/services/apiFactory.js";

/**
 * Servicios para la gestión de tipos de películas.
 * Utiliza apiFactory para proporcionar métodos CRUD estandarizados.
 */
export const typeServices = createApiService("type");