const validators = {
    required: (message) =>
        value => (value || typeof value === 'number' ? undefined : message),
    maxLength: (max) =>
        (value, formValues, instanceRef, fieldName) => {
            console.log(value, formValues, instanceRef, fieldName);
           return value && value.length > max ? `Must be ${max} characters or less` : undefined
        },
    minLength: (min) =>
        (value) =>
            value && value.length < min ? `Mus be ${min} characters or greater` : undefined
};

export default validators;