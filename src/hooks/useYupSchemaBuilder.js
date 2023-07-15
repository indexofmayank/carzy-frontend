import * as Yup from "yup";
import fieldTypes from "../constants/FieldType";

const useYupSchemaBuilder = ({ fields }) => {
    const schema = {};
    fields.map((field) => {
        const validationType = field.validationType || field.type;
        const yupSchemaObject = yupSchemaType(validationType);
        schema[field.name] = buildSchemaByValidationRules(yupSchemaObject, field);
    })
    return Yup.object(schema);
};

const yupSchemaType = (validationType) => {
    let yupObject = Yup;
    switch (validationType) {
        case fieldTypes.text:
        case fieldTypes.password:
            yupObject = yupObject.string();
            break;
        case fieldTypes.number:
            yupObject = yupObject.number();
            break;
        default:
            break;
    }
    return yupObject;
}

const buildSchemaByValidationRules = (yupSchemaObject, fieldDetail) => {
    fieldDetail.validationRules.map((ruleDetail) => {
        switch (ruleDetail.type) {
            case "required":
                yupSchemaObject.required(ruleDetail.message);
                break;
            case "min":
                yupSchemaObject.min(ruleDetail.value, ruleDetail.message);
                break;
            case "max":
                yupSchemaObject.max(ruleDetail.value, ruleDetail.message);
                break;
            default:
                break;
        }
    })
};

export default useYupSchemaBuilder;

// const validationSchema = Yup.object({
//     email: Yup.string().email().required("email is required"),
//     password: Yup.string().min(6).max(16).required(),
//   });