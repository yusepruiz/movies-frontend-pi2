import { Suspense } from "react";
import { Link } from "react-router";

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