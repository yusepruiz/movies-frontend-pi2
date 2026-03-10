export const FormInput = ({ label, ...props }) => (
    <div className="flex-grow-1">
        {label && <label className="form-label small fw-bold">{label}</label>}
        <input {...props} className="form-control" />
    </div>
);