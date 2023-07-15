import { ErrorMessage, Field } from "formik";

const TextField = (field) => {
  const { name, placeholder, label } = field;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field type="text" name={name} placeholder={placeholder} />
      <ErrorMessage name={name}></ErrorMessage>
    </div>
  );
}

export default TextField;