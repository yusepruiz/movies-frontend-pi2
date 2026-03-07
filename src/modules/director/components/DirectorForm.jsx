import { useParams } from "react-router";

export const DirectorForm = ({ title, action, loading, state, actionText, procesingText }) => {
    const { id } = useParams();

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

                <div className="form-check mb-2">
                    <input
                        name="state"
                        type="checkbox"
                        value="true"
                        className="form-check-input"
                    />
                    <label>Activo</label>
                </div>

                <button type="submit" disabled={loading} className="btn btn-primary">
                    {loading ? procesingText : actionText}
                </button>

                {state.error && <p className="text-danger">{state.error}</p>}
                {state.success && <p className="text-success">¡Funcionó!</p>}
            </form>
        </div>
    );
}