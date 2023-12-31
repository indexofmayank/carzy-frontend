import ResetButton from "./ResetButton";
import SubmitButton from "./SubmitButton";

const FormButtonFactory = ({ button }) => {
    const type = button.type;
    let jsx;
    switch (type) {
        case 'submit':
            jsx = <SubmitButton button={button}></SubmitButton>;
            break;
        case 'reset':
            jsx = <ResetButton button={button}></ResetButton>;
            break;
        default:
            break;
    }
    return jsx;
};

export default FormButtonFactory;
