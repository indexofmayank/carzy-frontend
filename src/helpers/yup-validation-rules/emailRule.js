const emailRule = (yupSchemaObject) => {
    const rule = yupSchemaObject.email("Please enter valid email");
    return rule;
};

export default emailRule;