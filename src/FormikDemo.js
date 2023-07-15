import { Formik, useFormik, Form, Field, ErrorMessage } from "formik";
import { useMemo } from "react";
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
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={false}>
      {
        (formik) => {
          console.log(formik);
          return (
            <Form>
              <div>
                <Field type="text" name="email" placeholder="Email" />
                <ErrorMessage name='email' />
              </div>
              <div>
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" />
              </div>
              <button type="submit">Submit</button>
            </Form>
          )
        }
      }
    </Formik>
  );
}

export default FormikDemo;