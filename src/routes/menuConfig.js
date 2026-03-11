import { directorMenu } from "@/modules/director/directorMenu";
import { genreMenu } from "@/modules/genre/genreMenu";
import { mediaMenu } from "@/modules/media/mediaMenu";
import { producerMenu } from "@/modules/producer/producerMenu";
import { typeMenu } from "@/modules/type/typeMenu";


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