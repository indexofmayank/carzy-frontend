import { Divider } from '@mui/material';
import FormButtonFactory from '../form-buttons/FormButtonFactory';
import React from 'react';

const FormControlFooter = ({ buttons }) => {
    // let firstButton = buttons.shift();
    return (
        <>
            {/* <FormButtonFactory key={0} button={firstButton}></FormButtonFactory>; */}
            {buttons.map((button, index) => {
                return (
                    <React.Fragment key={index}>
                        {index !== 0 && <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 1 }} />}
                        <FormButtonFactory key={button.type} button={button} ></FormButtonFactory>
                    </React.Fragment>
                )
            })}
        </>
    );
};

export default FormControlFooter;
