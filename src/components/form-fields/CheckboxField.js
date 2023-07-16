import { ErrorMessage, Field } from "formik";

const CheckboxField = (field) => {
  const { name, label } = field;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field type="checkbox" name={name} />
      <ErrorMessage name={name}></ErrorMessage>
    </div>
  );
};

export default CheckboxField;