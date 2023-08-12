import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useState } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography, Box, CardActions, Collapse, Tooltip, Button } from '@mui/material';
// third-party
import { CopyToClipboard } from 'react-copy-to-clipboard';
import reactElementToJSXString from 'react-element-to-jsx-string';
// project import
// import Highlighter from './third-party/Highlighter';
import SyntaxHighlight from 'utils/SyntaxHighlight';
import { CloseCircleFilled, PlusCircleOutlined } from '@ant-design/icons';
// header style
const headerSX = {
    p: 2.5,
    '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' }
};
// ==============================|| CUSTOM - MAIN CARD ||============================== //
const MainCard = forwardRef(
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
                {/* card header and action */}
                {!darkTitle && title && (
                    <CardHeader sx={headerSX} titleTypographyProps={{ variant: 'subtitle1' }} title={title} action={secondary} />
                )}
                {darkTitle && title && (
                    <CardHeader sx={headerSX} title={<Typography variant="h3">{title}</Typography>} action={secondary} />
                )}
                {/* card content */}
                {content && <CardContent sx={contentSX}>{children}</CardContent>}
                {!content && children}
                {/* card footer - clipboard & highlighter  */}
                {codeHighlight && (
                    <>
                        <Divider sx={{ borderStyle: 'dashed' }} />
                        {/* <Highlighter codeHighlight={codeHighlight} main>
              {children}
            </Highlighter> */}
                        <Box sx={{ position: 'relative', pt: 2, pb: 2, pl: 5.25, pr: 5.25 }}>
                            <CardActions sx={{ justifyContent: 'flex-end', p: 1, mb: highlight ? 1 : 0 }}>
                                <Box sx={{ display: 'flex', position: 'inherit', right: 0, top: 6 }}>
                                    <CopyToClipboard
                                        text={reactElementToJSXString(children, {
                                            showFunctions: true,
                                            maxInlineAttributesLineLength: 100
                                        })}
                                    >
                                        <Tooltip title="Cancel" placement="top-end">
                                            <Button
                                                variant="contained"
                                                color="error"
                                                size="large"
                                                onclick={() => setHighlight(!!highlight)}
                                                startIcon={<CloseCircleFilled />}
                                            >
                                                Cancel
                                            </Button>
                                        </Tooltip>
                                    </CopyToClipboard>
                                    <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 1 }} />
                                    {/* <Tooltip title="Submit" placement="top-end"> */}
                                    <Button
                                        variant="contained"
                                        color="success"
                                        size="large"
                                        onclick={() => setHighlight(!!highlight)}
                                        startIcon={<PlusCircleOutlined />}
                                    >
                                        Submit
                                    </Button>
                                    {/* </Tooltip> */}
                                </Box>
                            </CardActions>
                            {/* <Collapse in={highlight}>
                                {highlight && (
                                    <SyntaxHighlight>
                                        {reactElementToJSXString(children, {
                                            showFunctions: true,
                                            showDefaultProps: false,
                                            maxInlineAttributesLineLength: 100
                                        })}
                                    </SyntaxHighlight>
                                )}
                            </Collapse> */}
                        </Box>
                    </>
                )}
            </Card>
        );
    }
);
MainCard.propTypes = {
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
export default MainCard;
