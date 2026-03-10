/**
 * Componente de área de texto reutilizable para formularios.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} [props.label] - Etiqueta de texto para el campo.
 * @param {number} [props.rows=3] - Número de filas iniciales.
 * @param {Object} props.rest - Cualquier otra propiedad nativa de un textarea.
 * @returns {JSX.Element} El textarea renderizado.
 */
export const FormTextArea = ({ label, rows = 3, ...props }) => (
    <div className="flex-grow-1">
        {label && <label className="form-label small fw-bold">{label}</label>}
        <textarea
            {...props}
            rows={rows}
            className="form-control"
            style={{ resize: 'none' }}
        />
    </div>
);