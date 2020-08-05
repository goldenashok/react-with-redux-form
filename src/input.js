import React from 'react';

const Input = ({
    placeholder = 'Please enter input..',
    input,
    meta,
    name,
    disabled = false,
    allowedPattern
}) => {
    console.log('meta', meta);
    const onChange = (event) => {
        if (allowedPattern) {
            const regexd = new RegExp(allowedPattern);
            if (!regexd.test(event.target.value)) {
                event.target.value = input.value;
            }
        }
        input.onChange(event);
    }

    if (disabled) {
        return <p>{input.value}</p>
    }
    return (
        <>
        <input type="text" onChange={onChange} name={name} placeholder={placeholder} value={input.value} />
        {meta.submitFailed && <span>{meta.error}</span>}
        </>
    )
}

export default Input;