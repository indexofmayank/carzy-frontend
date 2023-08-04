const isRequired = (yupObject, { required }) => {
    return required ? yupObject.required() : yupObject.nullable();
};

const buildSchemaByValidationRules = (yupSchemaObject, fieldDetail) => {
    fieldDetail?.validationRules?.forEach((ruleDetail) => {
        switch (ruleDetail.type) {
            case 'min':
                yupSchemaObject = yupSchemaObject.min(ruleDetail.value, ruleDetail.message);
                break;
            case 'max':
                yupSchemaObject = yupSchemaObject.max(ruleDetail.value, ruleDetail.message);
                break;
            case 'email':
                yupSchemaObject = yupSchemaObject.email(ruleDetail.message);
                break;
            default:
                break;
        }
    });
    return yupSchemaObject;
};

export { buildSchemaByValidationRules, isRequired };
