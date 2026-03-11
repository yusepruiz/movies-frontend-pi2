
/**
 * Componente de selección genérico para formularios.
 * @param {Object} props
 * @param {string} props.label - Etiqueta del campo.
 * @param {Array} props.options - Array de objetos [{id, name}, ...].
 * @param {string} [props.defaultText] - Texto que aparece por defecto (ej: "Seleccione un género").
 */
export const FormSelect = ({ label, options = [], defaultText = "Seleccione una opción", ...props }) => (
    <div className="flex-grow-1">
        {label && <label className="form-label small fw-bold">{label}</label>}
        <select {...props} className="form-select">
            <option value="">{defaultText}</option>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    </div>
);