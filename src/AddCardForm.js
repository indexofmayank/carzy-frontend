import FormControl from "./components/form-builder/FormControl";

const AddCardForm = () => {

  const formDetails = {
    "name": "brand",
    "label": "Brand",
    "fields": [
      {
        "type": "text",
        "id": 1,
        "label": "First name",
        "value": "",
        "name": "fname",
        "placeholder": "",
        "required": true,
        "validationRules": [
          {
            "type": "required",
            "message": "this field is required"
          },
          {
            "type": "alpha",
            "message": "{{field}} field should be valid Name"
          },
          {
            "type": "min",
            "message": "{{field}} field should be valid Name",
            "value": 3
          },
          {
            "type": "max",
            "message": "{{field}} field should be valid Name",
            "value": "10"
          }
        ]
      },
      {
        "type": "text",
        "id": 2,
        "label": "Email",
        "name": "email",
        "value": "",
        "min": "",
        "max": "",
        "validationRules": [
          {
            "type": "required",
            "message": "this field is required"
          },
          {
            "type": "alpha",
            "message": "{{field}} field should be valid Name"
          }
        ]
      }
    ],
    "buttons": [
      {
        "type": "reset",
        "label": "Reset",
        "position": ""
      },
      {
        "type": "submit",
        "label": "Add Car",
        "position": ""
      }
    ]
  }

  // formDetails.onSubmit = () => {
  //   console.log("form got submitted");
  // }

  // formDetails.validationSchema = {};
  // formDetails.initialValues = { fname: "", email: "" };

  return (
    <div>
      <FormControl formDetails={formDetails} clientResetHandler={() => {
        console.log("form reset");
      }} clientSubmitHandler={() => {
        console.log("form got submitted");
      }}></FormControl>
    </div>
  )
}

export default AddCardForm;