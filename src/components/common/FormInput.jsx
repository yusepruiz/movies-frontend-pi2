/**
 * Componente de entrada de texto reutilizable para formularios.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} [props.label] - Etiqueta de texto para el campo.
 * @param {Object} props.rest - Cualquier otra propiedad nativa de un input (type, value, onChange, etc).
 * @returns {JSX.Element} El input renderizado con su etiqueta opcional.
 */
export const FormInput = ({ label, ...props }) => (
    <div className="flex-grow-1">
        {label && <label className="form-label small fw-bold">{label}</label>}
        <input {...props} className="form-control" />
    </div>
);