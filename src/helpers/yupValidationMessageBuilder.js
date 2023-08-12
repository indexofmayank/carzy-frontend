import VALIDATION_TYPE from "constants/ValidationType";

const buildYupValidationMessage = (validationType, field, definedValue = "") => {
    const fieldLabel = field.label;
    let validationMessage = "";
    switch (validationType) {
        case VALIDATION_TYPE.minChars:
            validationMessage = `${fieldLabel} must be minimum ${definedValue} chars long`;
            break;
        case VALIDATION_TYPE.maxChars:
            validationMessage = `${fieldLabel} must be maximum ${definedValue} chars long`;
            break;
        case VALIDATION_TYPE.min:
            validationMessage = `${fieldLabel} must be less than or equal to ${definedValue}`;
            break;
        case VALIDATION_TYPE.max:
            validationMessage = `${fieldLabel} must be greater than or equal to ${definedValue}`;
            break;
        case VALIDATION_TYPE.required:
            validationMessage = `${fieldLabel} is required,Please enter`;
            break;
        case VALIDATION_TYPE.email:
            validationMessage = `Please enter valid email address`;
            break;
        case VALIDATION_TYPE.alpha:
            validationMessage = `Please enter only alpha characters`;
            break;
        case VALIDATION_TYPE.alpha_with_string:
            validationMessage = `Please enter only alpha characters with spaces`;
            break;
        case VALIDATION_TYPE.date:
            validationMessage = `Please enter valid date`;
            break;
        default:
            break;
    }
    return validationMessage;
};



export default buildYupValidationMessage;