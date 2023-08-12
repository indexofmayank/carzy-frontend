const positiveNumberRule = (yupSchemaObject) => {
    const rule = yupSchemaObject.positive();
    return rule;
};

export default positiveNumberRule;