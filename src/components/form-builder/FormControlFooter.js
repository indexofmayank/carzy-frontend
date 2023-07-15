import FormButtonFactory from "../form-buttons/FormButtonFactory";

const FormControlFooter = ({ buttons, formik }) => {
  return (
    <div>
      {
        buttons.map((button) => {
          return (
            <FormButtonFactory key={button.type} button={button}></FormButtonFactory>
          )
        })
      }
    </div>
  )
}

export default FormControlFooter;