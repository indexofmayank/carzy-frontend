import PropTypes from 'prop-types';
import { PlusCircleOutlined } from '@ant-design/icons';
import StandardButton from "components/buttons/StandardButton";

const ResetButton = ({ button }) => {
    const resetButtonConfig = { ...button, type: "reset", color: "error" };
    return (
        <StandardButton {...resetButtonConfig} icon={<PlusCircleOutlined />}></StandardButton>
    )
};

ResetButton.propTypes = {
    button: PropTypes.object
};

export default ResetButton;