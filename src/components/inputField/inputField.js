import './inputField.scss';
import React from 'react';
import classnames from 'classnames';

function InputField(props) {
    const { type, value, handleChange, modifier, label, fieldName, customClass } = props;
    const className = classnames('input', {
        [`input--${modifier}`]: !!modifier,
        [customClass]: !!customClass
    });

    return (
        <React.Fragment>
            <span className="input__label">{label}</span>
            <input
                type={type}
                className={className}
                value={value}
                onChange={(event) => handleChange(fieldName, event.target.value)}
            />
        </React.Fragment>
    );
}

InputField.defaultProps = {
    type: 'text',
    handleChange: () => {},
    modifier: 'location',
    fieldName: 'location',
    customClass: ''
};
export default InputField;