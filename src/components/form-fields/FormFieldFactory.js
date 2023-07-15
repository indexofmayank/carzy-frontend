import fieldTypes from "../../constants/FieldType";
import TextField from "./TextField";
import PasswordField from "./PasswordField";

const FormFieldFactory = (field) => {

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

export default FormFieldFactory;