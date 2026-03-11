/**
 * Configuración del menú para el módulo de Medios.
 */
export const mediaMenu = {
    title: "Películas/Series",
    id: "menuMedia",
    icon: "bi-play-btn",
    links: [
        { label: "Listar Películas/Series", to: "/media", icon: "bi-list-ul" },
        { label: "Crear Película/Serie", to: "/media/create", icon: "bi-plus-circle" },
    ],
};