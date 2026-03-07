import { useParams } from "react-router";
import { useState } from "react";

export const DirectorForm = ({ title, action, loading, state, actionText, procesingText }) => {
    const { id } = useParams();
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="container mt-4">
            <h3>{title || "Formulario de Director"}</h3>
            <form action={action}>
                <input type="hidden" name="id" value={id} />

                <input
                    name="name"
                    type="text"
                    placeholder="Nombre"
                    className="form-control mb-2"
                    required
                />
                {/* 
                <div className="form-check mb-2">
                    <input
                        name="state"
                        type="checkbox"
                        value="true"
                        className="form-check-input"
                    />
                    <label>Activo</label>
                </div> */}

                <div className="form-check form-switch">
                    <input className="form-check-input" name="state" type="checkbox" value="true" role="switch" id="switchCheckChecked" onChange={e => setIsActive(e.target.checked)} />
                    <label className="form-check-label" for="switchCheckChecked">{isActive ? "Activo" : "Inactivo"}</label>
                </div>

                <button type="submit" disabled={loading} className="btn btn-success">
                    {loading ? procesingText : actionText}
                </button>

                {state.error && <p className="text-danger">{state.error}</p>}
                {state.success && <p className="text-success">¡Funcionó!</p>}
            </form>
        </div>
    );
}