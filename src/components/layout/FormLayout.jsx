import { Link } from "react-router";
import { useFormAlerts } from "@/hooks/useFormAlerts";

/**
 * Componente de diseño para formularios estandarizados.
 * Incluye título, botones de acción y manejo visual de estados de respuesta (éxito/error) mediante SweetAlert2.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - Título del formulario.
 * @param {Function} props.onSubmit - Función manejadora del envío del formulario.
 * @param {boolean} props.loading - Indica si el formulario está en proceso de envío.
 * @param {boolean} props.isEditMode - Indica si es un formulario de edición o creación.
 * @param {Object} props.responseState - Estado de la respuesta (success, message, error).
 * @param {React.ReactNode} props.children - Campos del formulario.
 * @param {string} props.backTo - Ruta para el enlace de "Volver".
 * @param {string} props.text - Texto descriptivo para el enlace de volver (ej: "directores").
 * @returns {JSX.Element} El diseño de formulario renderizado.
 */
export const FormLayout = ({ title, onSubmit, loading, isEditMode, responseState, children, backTo, text }) => {
    useFormAlerts(responseState);

    return (
        <div className="container mt-4">
            <h3 className="mb-4">{title}</h3>
            <form onSubmit={onSubmit} className="d-flex flex-column gap-3">
                {children}
                <div className="d-flex justify-content-end mt-2">
                    <button type="submit" disabled={loading} className="btn btn-sm btn-primary px-4 py-2">
                        {loading ? "Procesando..." : (isEditMode ? "Actualizar" : "Crear")}
                    </button>
                </div>
            </form>

            <Link to={backTo} className="text-decoration-none text-primary mt-3 d-inline-block fw-medium fst-italic">
                Volver a la lista de {text}
            </Link>
        </div>
    );
};
