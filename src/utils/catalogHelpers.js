/**
 * Busca un nombre dentro de una lista de catálogo basándose en su ID.
 * @param {Array} list - La lista del catálogo (ej: genres, directors).
 * @param {number|string} id - El ID a buscar.
 * @returns {string} El nombre encontrado o el ID como fallback.
 */
export const getNameById = (list, id) => {
    return list?.find(item => item.id == id)?.name || `ID: ${id}`;
};