import { useRouteError, Link } from "react-router";

/**
 * Componente de página de error premium para manejar fallos en las rutas y peticiones.
 * Utiliza useRouteError para obtener detalles del error (404, 500, AxiosErrors, etc).
 * 
 * @returns {JSX.Element} La página de error renderizada.
 */
export const ErrorPage = () => {
    const error = useRouteError();
    console.error("Detalle del Error:", error);

    // Intentamos extraer un mensaje amigable
    const errorMessage = error?.response?.data?.message || error?.statusText || error?.message || "Algo salió mal";
    const status = error?.status || error?.response?.status || "Error";

    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center px-4">
            <div className="card shadow-lg p-5 border-0" style={{ maxWidth: '500px', borderRadius: '1.5rem' }}>
                <div className="mb-4">
                    <i className="bi bi-exclamation-triangle-fill text-warning" style={{ fontSize: '4rem' }}></i>
                </div>

                <h1 className="fw-bold text-dark mb-2">{status}</h1>
                <h2 className="h4 text-secondary mb-4">¡Ups! Tuvimos un problema</h2>

                <div className="bg-light p-3 rounded-3 mb-4 border">
                    <p className="text-muted small mb-0 font-monospace">
                        {errorMessage}
                    </p>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill fw-bold shadow-sm">
                        <i className="bi bi-house-door me-2"></i>Ir al Inicio
                    </Link>
                    <button
                        onClick={() => window.location.reload()}
                        className="btn btn-outline-secondary px-4 py-2 rounded-pill fw-bold"
                    >
                        <i className="bi bi-arrow-clockwise me-2"></i>Reintentar
                    </button>
                </div>
            </div>

            <p className="mt-4 text-muted small">
                Si el problema persiste, contacta al administrador del sistema.
            </p>
        </div>
    );
};
