/**
 * Constantes globales de la aplicación.
 */
export const STATE_COLORS = {
    INACTIVE: "#6B7280",
    ACTIVE: "#D97706"
}

export const ALERTS_MESSAGES = {
    SUCCESS: "Operación completada con éxito",
    ERROR: "Ocurrió un error inesperado",
    DELETE: (displayName) => `Deseas eliminar \"${displayName}\". ¡Esta acción no se puede deshacer!`,
}

export const ALERTS_BUTTONS_COLORS = {
    SUCCESS: "#0d6efd",
    ERROR: "#0d6efd",
    DELETE: {
        CONFIRM: "#d33",
        CANCEL: "#3085d6",
    },
}
