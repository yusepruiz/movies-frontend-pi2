

export const FormSelect = ({
    label,
    name,
    value,
    onChange,
    options,
    placeholder,
    disabled,
    required
}) => {
    return (
        <div className="form-group">
            {label && (
                <label htmlFor={name}>
                    {label}
                    {required && <span className="required">*</span>}
                </label>
            )}
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                className="form-select"
            >
                {placeholder && (
                    <option value="">
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};