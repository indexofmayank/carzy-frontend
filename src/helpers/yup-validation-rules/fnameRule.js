
const fnameRule = (yupSchemaObject) => {
    const rule = yupSchemaObject.min(2).max(50);
    return rule;
};

export default fnameRule;