/**
 * Configuración del menú para el módulo de productores.
 */
export const producerMenu = {
    title: "Productores",
    id: "menuProducer",
    icon: "bi-person-workspace",
    links: [
        { label: "Listar Productores", to: "/producer", icon: "bi-list-ul" },
        { label: "Crear Productor", to: "/producer/create", icon: "bi-plus-circle" },
    ],
};