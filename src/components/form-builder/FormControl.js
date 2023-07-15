
import FormControlHeader from "./FormControlHeader";
import { Form, Formik } from "formik";
import useFormControl from "./useFormControl";
import FormControlBody from "./FormControlBody";
import FormControlFooter from "./FormControlFooter";

const FormControl = ({ formDetails, clientSubmitHandler, clientResetHandler }) => {
  const { initialValues, submitHandler, resetHandler } = useFormControl({ formDetails, clientResetHandler, clientSubmitHandler });
  const { name, label, fields, buttons } = formDetails;
  return (
    <Formik onSubmit={submitHandler} initialValues={initialValues} onReset={resetHandler} validateOnChange={false}>
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