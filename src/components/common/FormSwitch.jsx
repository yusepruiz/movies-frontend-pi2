/**
 * Componente de interruptor (switch) basado en checkbox de Bootstrap.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.id - ID único para el input y label.
 * @param {boolean} props.isActive - Estado actual del switch.
 * @param {Function} props.onChange - Función que recibe el nuevo valor booleano.
 * @param {string} props.colorIsActive - Color hexadecimal para el texto del estado.
 * @returns {JSX.Element} El switch renderizado.
 */
export const FormSwitch = ({ id, isActive, onChange, colorIsActive }) => (
    <div className="form-check form-switch d-flex align-items-center">
        <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id={id}
            checked={isActive}
            onChange={(e) => onChange(e.target.checked)}
        />
        <label
            className="form-check-label fw-bold ms-2"
            htmlFor={id}
            style={{ color: colorIsActive, minWidth: "80px" }}
        >
            {isActive ? "Activo" : "Inactivo"}
        </label>
    </div>
);