import fieldTypes from "../../constants/FieldType";
import PasswordField from "./PasswordField";
import TextField from "./TextField";

const FormFieldBuilder = (field) => {

  const type = field.type;
  let jsx;
  switch (type) {
    case fieldTypes.email:
      jsx = <TextField {...field} />
      break;
    case fieldTypes.text:
      jsx = <TextField {...field} />
      break;
    case fieldTypes.password:
      jsx = <PasswordField {...field} />
      break;
    default:
      jsx = <TextField {...field} />
      break;
  }
  return jsx;
}

export default FormFieldBuilder;