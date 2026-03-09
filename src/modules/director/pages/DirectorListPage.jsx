import { Suspense } from "react";
import { Link } from "react-router";

import { directorServices } from "@/modules/director/services/directorServices";
import { DirectorListContent } from "@/modules/director/components/DirectorListContent";

/**
 * Componente principal de la página de directores
 * 
 * @returns {JSX.Element}
 */
export const DirectorListPage = () => {
    const directorsPromise = directorServices.getDirectors();

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Listado de Directores</h1>
                <span className="badge bg-info text-dark">React 19 Pattern</span>
            </div>

            <hr />

            <Suspense fallback={
                <div className="d-flex align-items-center mt-4">
                    <strong>Cargando directores...</strong>
                    <div className="spinner-border ms-auto text-primary" role="status" aria-hidden="true"></div>
                </div>
            }>
                <div className="d-flex justify-content-end">
                    <Link to="/director/create" className="btn btn-sm btn-primary me-4 px-2 py-1" title="Crear"><i className="bi bi-plus me-2"></i>Crear</Link>
                </div>
                <DirectorListContent directorsPromise={directorsPromise} />
            </Suspense>
        </div>
    );
};