import VALIDATION_TYPE from "constants/ValidationType";
import buildYupValidationMessage from "helpers/yupValidationMessageBuilder";

const passwordRule = ({ yupSchemaObject, field }) => {
    const rule = yupSchemaObject
        .min(6, buildYupValidationMessage(VALIDATION_TYPE.minChars, field, 6))
        .max(16, buildYupValidationMessage(VALIDATION_TYPE.maxChars, field, 16));
    return rule;
};

export default passwordRule;