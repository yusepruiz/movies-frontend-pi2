import { directorMenu } from "@/modules/director/directorMenu";
import { genderMenu } from "@/modules/gender/genderMenu";
// import { mediaMenu } from "../modules/media/mediaMenu";

/**
 * Configuración del menú de navegación lateral.
 * Agrupa las opciones de menú de todos los módulos habilitados.
 */
export const menuConfig = [
    directorMenu,
    genderMenu,
    // mediaMenu,
];