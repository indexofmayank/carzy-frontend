import FormFieldFactory from "../form-fields/FormFieldFactory";

const FormControlBody = (props) => {
  return (
    <div>
      {
        props.fields.map((field) => {
          return (
            <FormFieldFactory key={field.id} {...field} ></FormFieldFactory>
          )
        })
      }
    </div>
  )

}

export default FormControlBody;