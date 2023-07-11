import FormFieldBuilder from "./FormFieldBuilder";


const FormBody = (props) => {
  return (
    <div>
      {
        props.fields.map((field) => {
          return (
            <FormFieldBuilder key={field.id} {...field} ></FormFieldBuilder>
          )
        })
      }
    </div>
  )

}

export default FormBody;