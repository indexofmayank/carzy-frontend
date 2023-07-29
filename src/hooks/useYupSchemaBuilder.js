import * as Yup from 'yup';
import fieldTypes from '../constants/FieldType';
import * as validationRuleHelper from '../helpers/validation-rule-helper';

const useYupSchemaBuilder = ({ fields }) => {
    const schema = {};
    fields.forEach((field) => {
        const yupSchemaObject = buildYupSchemaByRuleNameOrValidationType(field);
        schema[field.name] = field.required ? yupSchemaObject.required() : yupSchemaObject.nullable();
        schema[field.name] = validationRuleHelper.buildSchemaByValidationRules(schema[field.name], field);
    });
    return Yup.object(schema);
};

const buildYupSchemaByRuleNameOrValidationType = (field) => {
    let yupSchemaObject = null;
    if (field.ruleName) {
        yupSchemaObject = validationRuleHelper[field.ruleName]({ required: field.required });
    } else {
        const validationType = field.validationType || field.type;
        yupSchemaObject = yupSchemaType(validationType);
    }
    return yupSchemaObject;
};

const yupSchemaType = (validationType) => {
    let yupObject = null;
    switch (validationType) {
        case fieldTypes.text:
        case fieldTypes.password:
            yupObject = Yup.string();
            break;
        case fieldTypes.number:
            yupObject = Yup.number().positive('Please enter a valid number');
            break;
        default:
            break;
    }
    return yupObject;
};

export default useYupSchemaBuilder;
