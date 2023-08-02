import PropTypes from 'prop-types';
import { PlusCircleOutlined } from '@ant-design/icons';
import StandardButton from "components/buttons/StandardButton";

const ResetButton = ({ button }) => {
    const submitButtonConfig = { ...button, type: "reset", color: "danger" };
    return (
        <StandardButton {...submitButtonConfig} icon={<PlusCircleOutlined />}></StandardButton>
    )
};

ResetButton.propTypes = {
    button: PropTypes.exact({
        type: PropTypes.string,
    })
};

export default ResetButton;