/**
 * Configuración del menú para el módulo de tipo de películas.
 */
export const typeMenu = {
    title: "Tipo de Película",
    id: "menuType",
    icon: "bi-tags",
    links: [
        { label: "Listar Tipos de Películas", to: "/type", icon: "bi-list-ul" },
        { label: "Crear Tipo de Película", to: "/type/create", icon: "bi-plus-circle" },
    ],
};