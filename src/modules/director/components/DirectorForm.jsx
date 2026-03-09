import { Link } from "react-router";

import { useDirectorForm } from "@/modules/director/hooks/useDirectorForm";

export const DirectorForm = () => {

    const {
        name,
        setName,
        isActive,
        colorIsActive,
        toggleState,
        loading,
        handleSubmit,
        isEditMode,
        responseState
    } = useDirectorForm();

    return (
        <div className="container mt-4">

            <h3 className="mb-4">
                {isEditMode ? "Actualizar Director" : "Crear Director"}
            </h3>

            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">

                <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4">

                    <div className="flex-grow-1">

                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                    </div>

                    <div className="form-check form-switch d-flex align-items-center">

                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="switchDirector"
                            checked={isActive}
                            onChange={(e) => toggleState(e.target.checked)}
                        />

                        <label
                            className="form-check-label fw-bold"
                            htmlFor="switchDirector"
                            style={{ color: colorIsActive, minWidth: "80px" }}
                        >
                            {isActive ? "Activo" : "Inactivo"}
                        </label>

                    </div>

                </div>

                <div className="d-flex justify-content-end mt-2">

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-sm btn-primary px-4 py-2"
                    >
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2"></span>
                                {isEditMode ? "Actualizando..." : "Creando..."}
                            </>
                        ) : (
                            isEditMode ? "Actualizar" : "Crear"
                        )}
                    </button>

                </div>

                {/* Mensajes de feedback */}
                {responseState.success && (
                    <div className="alert alert-success">
                        {responseState.message}
                    </div>
                )}

                {responseState.error && (
                    <div className="alert alert-danger">
                        {responseState.error}
                    </div>
                )}


            </form>

            <Link
                to="/director"
                className="text-decoration-none text-primary mt-3 d-inline-block fw-medium fst-italic"
            >
                Volver a la lista de directores
            </Link>

        </div>
    );
};