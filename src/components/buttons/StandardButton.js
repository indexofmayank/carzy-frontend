import { Tooltip, Button } from "@mui/material";
import AnimateButton from "components/@extended/AnimateButton";
import PropTypes from 'prop-types';

const StandardButton = (button) => {
    const config = button.config ?? {};
    const buttonType = button.type ?? "button";
    return (
        // <Tooltip title={button.label} placement="top-end">
        <AnimateButton>
            <Button
                variant="contained"
                color={button.color}
                size="large"
                type={buttonType}
                startIcon={button.icon}
                {...config}
            >
                {button.label}
            </Button>
        </AnimateButton>
        // </Tooltip>
    )
};


StandardButton.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    config: PropTypes.object,
};

export default StandardButton;