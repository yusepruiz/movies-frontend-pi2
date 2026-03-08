import { Suspense } from "react";

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
                <DirectorListContent directorsPromise={directorsPromise} />
            </Suspense>
        </div>
    );
};