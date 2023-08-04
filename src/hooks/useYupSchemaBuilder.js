import * as Yup from 'yup';
import fieldTypes from '../constants/FieldType';
import * as validationRuleHelper from '../helpers/validation-rule-helper';
import * as yupValidationRules from '../helpers/yup-validation-rules';

const useYupSchemaBuilder = ({ fields }) => {
    const schema = {};
    fields.forEach((field) => {
        const yupSchemaObject = buildYupSchemaByRuleNameOrValidationType(field);
        schema[field.name] = validationRuleHelper.buildSchemaByValidationRules(yupSchemaObject, field);
    });
    return Yup.object(schema);
};

const buildYupSchemaByRuleNameOrValidationType = (field) => {
    let yupSchemaObject = null;
    if (field.ruleName) {
        yupSchemaObject = yupValidationRules[field.ruleName]({ required: field.required });
    } else {
        yupSchemaObject = initiateYupSchemaType(field);
    }
    return yupSchemaObject;
};

const initiateYupSchemaType = (field) => {
    let yupObject = null;
    switch (field.type) {
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
    yupObject = field.required ? yupObject.required() : yupObject.nullable();
    return yupObject;
};

export default useYupSchemaBuilder;
