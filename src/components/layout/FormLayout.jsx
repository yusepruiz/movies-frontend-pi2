import { Link } from "react-router";

export const FormLayout = ({ title, onSubmit, loading, isEditMode, responseState, children, backTo, text }) => (
    <div className="container mt-4">
        <h3 className="mb-4">{title}</h3>
        <form onSubmit={onSubmit} className="d-flex flex-column gap-3">
            {children}
            <div className="d-flex justify-content-end mt-2">
                <button type="submit" disabled={loading} className="btn btn-sm btn-primary px-4 py-2">
                    {loading ? "Procesando..." : (isEditMode ? "Actualizar" : "Crear")}
                </button>
            </div>

            {responseState.success && <div className="alert alert-success mt-2">{responseState.message}</div>}
            {responseState.error && <div className="alert alert-danger mt-2">{responseState.error}</div>}
        </form>

        <Link to={backTo} className="text-decoration-none text-primary mt-3 d-inline-block fw-medium fst-italic">
            Volver a la lista de {text}
        </Link>
    </div>
);