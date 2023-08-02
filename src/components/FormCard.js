import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useState } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography, Box, CardActions, Collapse, Tooltip, Button } from '@mui/material';

import FormControlFooter from './forms/form-builder/FormControlFooter';
import { Form, Formik } from 'formik';
// header style
const headerSX = {
    p: 2.5,
    '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' }
};
// ==============================|| CUSTOM - MAIN CARD ||============================== //
const FormCard = forwardRef(
    (
        {
            border = true,
            boxShadow,
            children,
            content = true,
            contentSX = {},
            darkTitle,
            elevation,
            secondary,
            shadow,
            sx = {},
            title,
            formik,
            buttons,
            codeHighlight,
            ...others
        },
        ref
    ) => {
        const theme = useTheme();
        boxShadow = theme.palette.mode === 'dark' ? boxShadow || true : boxShadow;
        const [highlight, setHighlight] = useState(false);
        return (
            <Card
                elevation={elevation || 0}
                ref={ref}
                {...others}
                sx={{
                    border: border ? '1px solid' : 'none',
                    borderRadius: 2,
                    borderColor: theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A800,
                    boxShadow: boxShadow && (!border || theme.palette.mode === 'dark') ? shadow || theme.customShadows.z1 : 'inherit',
                    ':hover': {
                        boxShadow: boxShadow ? shadow || theme.customShadows.z1 : 'inherit'
                    },
                    '& pre': {
                        m: 0,
                        p: '16px !important',
                        fontFamily: theme.typography.fontFamily,
                        fontSize: '0.75rem'
                    },
                    ...sx
                }}
            >
                {title && (
                    <CardHeader sx={headerSX} titleTypographyProps={{ variant: 'subtitle1' }} title={title} action={secondary} />
                )}
                <Form>
                    {content && <CardContent sx={contentSX}>{children}</CardContent>}
                    <Divider sx={{ borderStyle: 'dashed' }} />
                    <Box sx={{ position: 'relative', pt: 2, pb: 2, pl: 5.25, pr: 5.25 }}>
                        <CardActions sx={{ justifyContent: 'flex-end', p: 1, mb: highlight ? 1 : 0 }}>
                            <Box sx={{ display: 'flex', position: 'inherit', right: 0, top: 6 }}>
                                <FormControlFooter buttons={buttons}></FormControlFooter>
                            </Box>
                        </CardActions>
                    </Box>
                    {/* </> */}
                </Form>
            </Card>
        );
    }
);
FormCard.propTypes = {
    border: PropTypes.bool,
    boxShadow: PropTypes.bool,
    contentSX: PropTypes.object,
    darkTitle: PropTypes.bool,
    divider: PropTypes.bool,
    elevation: PropTypes.number,
    secondary: PropTypes.node,
    shadow: PropTypes.string,
    sx: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    codeHighlight: PropTypes.bool,
    content: PropTypes.bool,
    children: PropTypes.node
};
export default FormCard;
