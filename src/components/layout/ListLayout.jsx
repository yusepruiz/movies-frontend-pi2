import { Suspense } from "react";
import { Link } from "react-router";

/**
 * Componente de diseño para páginas de listado de recursos.
 * Incluye un encabezado con título, una línea divisoria y un botón de creación,
 * envolviendo el contenido en un Suspense con fallback de carga.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - Título de la página de listado.
 * @param {string} props.createLink - Ruta para el botón de creación de nuevo recurso.
 * @param {React.ReactNode} props.children - El contenido de la lista (generalmente GenericList).
 * @returns {JSX.Element} El diseño de listado renderizado.
 */
export const ListLayout = ({ title, createLink, children }) => {
    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>{title}</h1>
                <span className="badge bg-info text-dark">React 19 Pattern</span>
            </div>

            <hr />

            <Suspense fallback={
                <div className="d-flex align-items-center mt-4">
                    <strong>Cargando datos...</strong>
                    <div className="spinner-border ms-auto text-primary" role="status" aria-hidden="true"></div>
                </div>
            }>
                <div className="d-flex justify-content-end mb-3">
                    <Link to={createLink} className="btn btn-sm btn-primary me-4 px-2 py-1">
                        <i className="bi bi-plus me-2"></i>Crear
                    </Link>
                </div>

                {/* Acá se renderiza la lista */}
                {children}
            </Suspense>
        </div>
    );
};