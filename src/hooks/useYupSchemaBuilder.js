import * as Yup from 'yup';
import fieldTypes from '../constants/FieldType';
// import * as validationRuleHelper from '../helpers/validation-rule-helper';
import * as yupValidationRules from '../helpers/yup-validation-rules';

const useYupSchemaBuilder = ({ fields }) => {
    const schema = {};
    fields.forEach((field) => {
        const yupSchemaObject = initiateYupSchemaType(field);
        // const yupSchemaObject = buildYupSchemaByRuleName(field);
        // schema[field.name] = validationRuleHelper.buildSchemaByValidationRules(yupSchemaObject, field);
        schema[field.name] = buildYupSchemaByRuleNameOrValidationRules(field, yupSchemaObject);
    });
    return Yup.object(schema);
};

const buildYupSchemaByRuleNameOrValidationRules = (field, yupSchemaObject) => {
    if (field.ruleName) {
        yupSchemaObject = yupValidationRules[field.ruleName](yupSchemaObject);
    }
    // yupSchemaObject = buildSchemaByValidationRules(yupSchemaObject, field);
    return yupSchemaObject;
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
            default:
                break;
        }
    });
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
