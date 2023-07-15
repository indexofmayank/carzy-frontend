const FormButtonFactory = ({ button, formik }) => {
  const type = button.type;
  let jsx;
  switch (type) {
    case "submit":
      jsx = <button type="submit">{button.label}</button>
      break;
    case "reset":
      jsx = <button type="reset">{button.label}</button>
      break;
    default:
      break;
  }
  return jsx;
}

export default FormButtonFactory;