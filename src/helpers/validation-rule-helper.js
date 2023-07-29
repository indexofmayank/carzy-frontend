import * as Yup from 'yup';

const emailRule = ({ required }) => {
    const rule = Yup.string().email();
    return isRequired(rule, { required });
};

const fnameRule = ({ required }) => {
    const rule = Yup.string().min(2).max(50);
    return isRequired(rule, { required });
};

const passwordRule = ({ required }) => {
    // const pRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    const rule = Yup.string()
        .min(6, 'Password is too short - should be 8 chars minimum.')
        .max(16, 'Password is too big - should be 16 chars long.');
    return isRequired(rule, { required });
};

// const mongooseRule = ({ required }) => {
//     const rule = Yup.objectId();
//     return isRequired(rule, { required });
// };

const dateRule = ({ required }) => {
    const rule = Yup.date();
    return isRequired(rule, { required });
};

const boolRule = ({ required }) => {
    const rule = Yup.boolean();
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

export { emailRule, fnameRule, positiveNumberRule, buildSchemaByValidationRules, dateRule, boolRule, passwordRule };
