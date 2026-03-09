import { useEffect } from 'react';
import { useLocation } from 'react-router';

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