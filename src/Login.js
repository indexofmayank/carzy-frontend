import { useFormik } from "formik";
import TextField from "./components/FieldBuilder";

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: "test@test.com",
      password: "123456",
    },
    onSubmit(values) {
      console.log("values", values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField />

      <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;