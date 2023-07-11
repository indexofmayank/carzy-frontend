import { Formik, useFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email().required("email is required"),
  password: Yup.string().min(6).max(16).required(),
});

const FormikDemo = () => {

  const initialValues = {
    email: "test@test.com",
    password: "123456",
  };

  const onSubmit = (values) => {
    console.log("submitted");
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div>
          <Field type="text" name="email" />
          <ErrorMessage name='email' />
        </div>
        <div>
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikDemo;