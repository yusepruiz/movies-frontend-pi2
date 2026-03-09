import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Hook personalizado para cerrar automáticamente un elemento Offcanvas de Bootstrap.
 * Se dispara cada vez que la ubicación (ruta) cambia.
 * 
 * @param {string} elementId - El ID del elemento DOM que representa el Offcanvas.
 */
export const useCloseOffcanvas = (elementId) => {
    const location = useLocation();

    useEffect(() => {
        const element = document.getElementById(elementId);
        if (element) {
            // Usamos el selector de Bootstrap para el botón de cierre
            const closeBtn = element.querySelector('.btn-close');

            // Solo disparamos el click si el elemento es visible (está abierto)
            const isVisible = window.getComputedStyle(element).visibility !== 'hidden';

            if (isVisible && closeBtn) {
                closeBtn.click();
            }
        }
    }, [location, elementId]);
};