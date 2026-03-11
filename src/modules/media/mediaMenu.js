/**
 * Configuración del menú para el módulo de Medios.
 */
export const mediaMenu = {
    title: "Medios",
    id: "menuMedia",
    icon: "bi-film",
    links: [
        { label: "Listar Medios", to: "/media", icon: "bi-list-ul" },
        { label: "Crear Medio", to: "/media/create", icon: "bi-plus-circle" },
    ],
};