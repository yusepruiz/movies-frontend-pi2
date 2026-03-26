import { directorMenu } from "@/modules/director/directorMenu.js";
import { genreMenu } from "@/modules/genre/genreMenu.js";
import { mediaMenu } from "@/modules/media/mediaMenu.js";
import { producerMenu } from "@/modules/producer/producerMenu.js";
import { typeMenu } from "@/modules/type/typeMenu.js";


/**
 * Configuración del menú de navegación lateral.
 * Agrupa las opciones de menú de todos los módulos habilitados.
 */
export const menuConfig = [
    directorMenu,
    genreMenu,
    mediaMenu,
    producerMenu,
    typeMenu
];