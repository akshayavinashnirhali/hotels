import './inputField.scss';
import React from 'react';
import classnames from 'classnames';

function InputField(props) {
    const {
        type,
        value,
        handleChange,
        modifier,
        label,
        fieldName,
        customClass,
        error,
        errorMessage
    } = props;
    const className = classnames('input', {
        [`input--${modifier}`]: !!modifier,
        'input--error': !!error,
        [customClass]: !!customClass
    });
    const errorMessageElement = error && (
        <span className="input__error-message">{errorMessage}</span>
    );

    return (
        <React.Fragment>
            <span className="input__label">{label}</span>
            <input
                type={type}
                className={className}
                value={value}
                onChange={(event) => handleChange(fieldName, event.target.value)}
            />
            {errorMessageElement}
        </React.Fragment>
    );
}

InputField.defaultProps = {
    type: 'text',
    handleChange: () => {},
    modifier: 'location',
    fieldName: 'location'
};
export default InputField;