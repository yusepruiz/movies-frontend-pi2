import { createApiService } from "@/services/apiFactory";

/**
 * Servicios para la gestión de medios.
 * Utiliza apiFactory para proporcionar métodos CRUD estandarizados.
 */
export const mediaServices = createApiService("media");
