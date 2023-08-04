
const passwordRule = (yupSchemaObject) => {
    const rule = yupSchemaObject
        .min(6, 'Password is too short - should be 8 chars minimum.')
        .max(16, 'Password is too big - should be 16 chars long.');
    return rule;
};

export default passwordRule;