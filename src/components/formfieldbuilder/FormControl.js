import FormScreenBody from "./FormBody";
import FormScreenFooter from "./FormFooter";
import FormScreenHeader from "./FormScreenHeader";
import { Form, Formik } from "formik";


const FormControl = (formDetails) => {
  const { name, label, onSubmit, validationSchema, initialValues, fields } = formDetails;
  return (
    // validationSchema={validationSchema}
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      {
        (formik) => {
          return (
            <Form>
              <FormScreenHeader name={name} label={label} ></FormScreenHeader>
              <FormScreenBody fields={fields} ></FormScreenBody>
              <FormScreenFooter></FormScreenFooter>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default FormControl;