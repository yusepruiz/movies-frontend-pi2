import { useParams } from "react-router";
import { useState } from "react";

export const DirectorForm = ({ title, action, loading, state, actionText, procesingText }) => {
    const { id } = useParams();
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="container mt-4">
            <h3 className="mb-4">{title}</h3>

            {/* Contenedor principal del formulario con Flex Columna */}
            <form action={action} className="d-flex flex-column gap-3">
                <input type="hidden" name="id" value={id} />

                {/* Fila superior: Input de texto y Switch de estado */}
                <div className="d-flex align-items-center gap-4">
                    <div className="flex-grow-1">
                        <input
                            name="name"
                            type="text"
                            placeholder="Nombre del Director"
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="form-check form-switch d-flex align-items-center">
                        <input
                            className="form-check-input"
                            name="state"
                            type="checkbox"
                            value="true"
                            role="switch"
                            id="switchDirector"
                            onChange={e => setIsActive(e.target.checked)}
                        />
                        <label
                            className="form-check-label fw-bold"
                            htmlFor="switchDirector"
                            style={{ color: isActive ? '#D97706' : '#6B7280', minWidth: '80px' }}
                        >
                            {isActive ? "Activo" : "Inactivo"}
                        </label>
                    </div>
                </div>

                {/* Fila inferior: Botón alineado a la derecha */}
                <div className="d-flex justify-content-end mt-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary px-4 py-2"
                    >
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                {procesingText}
                            </>
                        ) : actionText}
                    </button>
                </div>

                {/* Mensajes de feedback */}
                {state.error && <p className="text-danger small mt-2">{state.error}</p>}
                {state.success && <p className="text-success small mt-2">¡Operación realizada con éxito!</p>}
            </form>
        </div>
    );
}