// material-ui
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';

// project import
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import { Toolbar } from '../../../../../node_modules/@mui/material/index';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
  <>
   <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
  </>  
    
  );
};

export default HeaderContent;
