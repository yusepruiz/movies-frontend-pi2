import { Link, useParams } from "react-router";
import { useState } from "react";
import { STATE_COLORS } from "@/constants/constants";

export const DirectorForm = ({ title, action, loading, state, actionText, procesingText, initialData = { name: "", state: false } }) => {
    const { id } = useParams();
    const [isActive, setIsActive] = useState(initialData.state);
    const [colorIsActive, setColorIsActive] = useState(initialData.state ? STATE_COLORS.ACTIVE : STATE_COLORS.INACTIVE);

    return (
        <div className="container mt-4">
            <h3 className="mb-4">{title}</h3>

            {/* Contenedor principal del formulario con Flex Columna */}
            <form action={action} className="d-flex flex-column gap-3">
                <input type="hidden" name="id" value={id} />

                {/* Fila superior: Input de texto y Switch de estado */}
                <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4">
                    <div className="flex-grow-1">
                        <input
                            name="name"
                            type="text"
                            placeholder="Nombre del Director"
                            className="form-control"
                            defaultValue={initialData.name}
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
                            defaultChecked={initialData.state}
                            onChange={e => {
                                setIsActive(e.target.checked);
                                setColorIsActive(e.target.checked ? STATE_COLORS.ACTIVE : STATE_COLORS.INACTIVE);
                            }}
                        />
                        <label
                            className="form-check-label fw-bold"
                            htmlFor="switchDirector"
                            style={{ color: colorIsActive, minWidth: '80px' }}
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
                        className="btn btn-sm btn-primary px-4 py-2"
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

            <Link to="/director" className="text-decoration-none text-primary mt-3 d-inline-block fw-medium fst-italic">Volver a la lista de directores</Link>
        </div>
    );
}