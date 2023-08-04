import VALIDATION_TYPE from "constants/ValidationType";
import buildYupValidationMessage from "helpers/yupValidationMessageBuilder";

const emailRule = ({ yupSchemaObject, field }) => {
    const rule = yupSchemaObject.email(buildYupValidationMessage(VALIDATION_TYPE.email, field));
    return rule;
};

export default emailRule;