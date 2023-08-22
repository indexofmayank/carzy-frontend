import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Toolbar } from '../../../node_modules/@mui/material/index';

export default function PaginationRounded() {
  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <Pagination count={5} />
    </Box>
  );
}