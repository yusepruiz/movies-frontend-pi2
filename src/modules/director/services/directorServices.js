import { createApiService } from "@/services/apiFactory";

/**
 * Servicios para la gestión de directores de cine.
 * Utiliza apiFactory para proporcionar métodos CRUD estandarizados.
 */
export const directorServices = createApiService("director");

export const directorsActive = createApiService("director/active");

