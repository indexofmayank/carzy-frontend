import * as Yup from "yup";
import fieldTypes from "../constants/FieldType";

const useYupSchemaBuilder = ({ fields }) => {
    const schema = {};
    fields.forEach((field) => {
        const validationType = field.validationType || field.type;
        const yupSchemaObject = yupSchemaType(validationType);
        schema[field.name] = field.required ? yupSchemaObject.required() : yupSchemaObject.nullable();
        schema[field.name] = buildSchemaByValidationRules(schema[field.name], field);
    });
    return Yup.object(schema);
};

const yupSchemaType = (validationType) => {
    let yupObject = null;
    switch (validationType) {
        case fieldTypes.text:
        case fieldTypes.password:
            yupObject = Yup.string();
            break;
        case fieldTypes.number:
            yupObject = Yup.number().positive("Please enter a valid number");
            break;
        default:
            break;
    }
    return yupObject;
};

const buildSchemaByValidationRules = (yupSchemaObject, fieldDetail) => {
    fieldDetail.validationRules.forEach((ruleDetail) => {
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

const buildValidationMessage = (field) => {

};

export default useYupSchemaBuilder;

// const validationSchema = Yup.object({
//     email: Yup.string().email().required("email is required"),
//     password: Yup.string().min(6).max(16).required(),
//   });