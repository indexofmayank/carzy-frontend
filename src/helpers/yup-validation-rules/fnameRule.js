import VALIDATION_TYPE from "constants/ValidationType";
import buildYupValidationMessage from "helpers/yupValidationMessageBuilder";

const fnameRule = ({ yupSchemaObject, field }) => {
    const rule = yupSchemaObject.min(2, buildYupValidationMessage(VALIDATION_TYPE.minChars, field, 2)).max(50, buildYupValidationMessage(VALIDATION_TYPE.maxChars, field, 50)).matches(/^[A-Za-z ]*$/, buildYupValidationMessage(VALIDATION_TYPE.alpha, field));
    return rule;
};

export default fnameRule;