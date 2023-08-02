import PropTypes from 'prop-types';
// material-ui
// import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, InputLabel, OutlinedInput } from '@mui/material';
// project import
import MainCard from 'components/MainCard';
import TextField from 'components/forms/form-fields/TextField';
// import ComponentSkeleton from './ComponentSkeleton';
// ===============================|| SHADOW BOX ||=============================== //
function ShadowBox({ shadow }) {
    return (
        <MainCard border={false} sx={{ boxShadow: shadow }}>
            <Stack spacing={1} justifyContent="center" alignItems="center">
                <Typography variant="h6">boxShadow</Typography>
                <Typography variant="subtitle1">{shadow}</Typography>
            </Stack>
        </MainCard>
    );
}
ShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired
};
// ===============================|| CUSTOM - SHADOW BOX ||=============================== //
function CustomShadowBox({ shadow, label, color, bgcolor }) {
    return (
        <MainCard border={false} sx={{ bgcolor: bgcolor || 'inherit', boxShadow: shadow }}>
            <Stack spacing={1} justifyContent="center" alignItems="center">
                <Typography variant="subtitle1" color={color}>
                    {label}
                </Typography>
            </Stack>
        </MainCard>
    );
}
CustomShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    bgcolor: PropTypes.string
};
// ============================|| COMPONENT - SHADOW ||============================ //
const ComponentShadow = () => {
    // const theme = useTheme();
    return (
        // <ComponentSkeleton>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <MainCard title="Basicss Shadow" codeHighlight contentSX={{ pl: 12.25, pr: 12.25, minHeight: 'calc(100vh - 320px)' }}>
                    <Grid container spacing={3}>
                        <Grid
                            item
                            container
                            xs={12}
                            sm={12}
                            md={12}
                            spacing={3}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item xs={12} sm={6} md={4}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="name-for">Name</InputLabel>
                                    <OutlinedInput id="name-for" type="text" name="nameTest" placeholder="Enter Name" fullWidth />
                                </Stack>
                            </Grid>
                            {/* <Grid item xs={12} sm={6} md={4} spacing={3} mdOffset="auto" smOffset="auto">
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="address-for">Address</InputLabel>
                                    <OutlinedInput id="address-for" type="text" name="address" placeholder="Enter Address" fullWidth />
                                </Stack>
                            </Grid> */}
                        </Grid>
                        {/* <Grid item xs={12} sm={6} md={4}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="address-for">Address</InputLabel>
                                <OutlinedInput id="address-for" type="text" name="address" placeholder="Enter Address" fullWidth />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="name-for">Name</InputLabel>
                                <OutlinedInput id="name-for" type="text" name="nameTest" placeholder="Enter Name" fullWidth />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="address-for">Address</InputLabel>
                                <OutlinedInput id="address-for" type="text" name="address" placeholder="Enter Address" fullWidth />
                            </Stack>
                        </Grid> */}
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
        // </ComponentSkeleton>
    );
};
export default ComponentShadow;
