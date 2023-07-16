import * as Yup from "yup";

const emailRule = ({ required }) => {
    const rule = Yup.string().email();
    return isRequired(rule, { required });
};

const fnameRule = ({ required }) => {
    const rule = Yup.string().min(2).max(50);
    return isRequired(rule, { required });
};

const mongooseRule = ({ required }) => {
    const rule = Yup.objectId();
    return isRequired(rule, { required });
};

const positiveNumberRule = () => {
    const rule = Yup.number().positive();
    return isRequired(rule);
};

const isRequired = (yupObject, { required }) => {
    return required ? yupObject.required() : yupObject.nullable();
};

const buildSchemaByValidationRules = (yupSchemaObject, fieldDetail) => {
    fieldDetail?.validationRules?.forEach((ruleDetail) => {
        switch (ruleDetail.type) {
            case "min":
                yupSchemaObject = yupSchemaObject.min(ruleDetail.value, ruleDetail.message);
                break;
            case "max":
                yupSchemaObject = yupSchemaObject.max(ruleDetail.value, ruleDetail.message);
                break;
            case "email":
                yupSchemaObject = yupSchemaObject.email(ruleDetail.message);
                break;
            default:
                break;
        }
    });
    return yupSchemaObject;
};

export { emailRule, fnameRule, positiveNumberRule, buildSchemaByValidationRules, mongooseRule };