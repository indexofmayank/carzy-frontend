import * as Yup from 'yup';
import fieldTypes from '../constants/FieldType';
import * as yupValidationRules from '../helpers/yup-validation-rules';
import VALIDATION_TYPE from 'constants/ValidationType';
import buildYupValidationMessage from 'helpers/yupValidationMessageBuilder';

const useYupSchemaBuilder = ({ fields }) => {
    const schema = {};
    fields.forEach((field) => {
        const yupSchemaObject = initiateYupSchemaType(field);
        schema[field.name] = buildYupSchemaByRuleNameOrValidationRules(field, yupSchemaObject);
    });
    return Yup.object(schema);
};

const buildYupSchemaByRuleNameOrValidationRules = (field, yupSchemaObject) => {
    if (field.rule_name) {
        yupSchemaObject = yupValidationRules[field.rule_name]({ yupSchemaObject, field });
    }
    yupSchemaObject = buildSchemaByValidationRules(yupSchemaObject, field);
    return yupSchemaObject;
};

const buildSchemaByValidationRules = (yupSchemaObject, fieldDetail) => {
    fieldDetail?.validation_rules?.forEach((ruleDetail) => {
        switch (ruleDetail.type) {
            case VALIDATION_TYPE.minChars:
                yupSchemaObject = yupSchemaObject.min(ruleDetail.value, buildYupValidationMessage(VALIDATION_TYPE.minChars, fieldDetail, ruleDetail.value));
                break;
            case VALIDATION_TYPE.min:
                yupSchemaObject = yupSchemaObject.min(ruleDetail.value, buildYupValidationMessage(VALIDATION_TYPE.min, fieldDetail, ruleDetail.value));
                break;
            case VALIDATION_TYPE.max:
                yupSchemaObject = yupSchemaObject.max(ruleDetail.value, buildYupValidationMessage(VALIDATION_TYPE.max, fieldDetail, ruleDetail.value));
                break;
            case VALIDATION_TYPE.maxChars:
                yupSchemaObject = yupSchemaObject.max(ruleDetail.value, buildYupValidationMessage(VALIDATION_TYPE.maxChars, fieldDetail, ruleDetail.value));
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
        case fieldTypes.select:
            yupObject = Yup.string();
            break;
        case fieldTypes.number:
            yupObject = Yup.number();
            break;
        default:
            yupObject = Yup.string();
            break;
    }
    yupObject = field.required ? yupObject.required(buildYupValidationMessage(VALIDATION_TYPE.required, field)) : yupObject.nullable();
    return yupObject;
};

export default useYupSchemaBuilder;
