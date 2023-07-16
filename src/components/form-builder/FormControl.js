
import FormControlHeader from "./FormControlHeader";
import { Form, Formik } from "formik";
import useFormControl from "./useFormControl";
import FormControlBody from "./FormControlBody";
import FormControlFooter from "./FormControlFooter";
import * as Yup from "yup";

const FormControl = ({ formDetails, clientSubmitHandler, clientResetHandler }) => {
  const { initialValues, validationSchema, submitHandler, resetHandler } = useFormControl({ formDetails, clientResetHandler, clientSubmitHandler });
  const { name, label, fields, buttons } = formDetails;
  const validationSchema1 = Yup.object({
    email: Yup.string().email().required("email is required"),
    fname: Yup.string().min(6).max(16).required(),
  });
  console.log(validationSchema);
  return (
    <Formik onSubmit={submitHandler} initialValues={initialValues} validationSchema={validationSchema} onReset={resetHandler} validateOnChange={false}>
      {
        (formik) => {
          return (
            <Form>
              <FormControlHeader name={name} label={label} ></FormControlHeader>
              <FormControlBody fields={fields} ></FormControlBody>
              <FormControlFooter formik={formik} buttons={buttons}></FormControlFooter>
            </Form>
          )
        }
      }
    </Formik >
  )
}

export default FormControl;