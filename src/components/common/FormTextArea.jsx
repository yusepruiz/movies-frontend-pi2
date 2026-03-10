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