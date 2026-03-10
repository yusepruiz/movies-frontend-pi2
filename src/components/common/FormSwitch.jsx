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