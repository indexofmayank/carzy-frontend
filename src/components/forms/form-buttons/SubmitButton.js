import PropTypes from 'prop-types';
import { PlusCircleOutlined } from '@ant-design/icons';
import StandardButton from "components/buttons/StandardButton";

const SubmitButton = ({ button }) => {
    const submitButtonConfig = { ...button, type: "submit", color: "primary" };
    return (
        <StandardButton {...submitButtonConfig} icon={<PlusCircleOutlined />}></StandardButton>
    )
};

SubmitButton.propTypes = {
    button: PropTypes.object
};

export default SubmitButton;