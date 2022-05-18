import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MyAlert = ({type, text}) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={type}>{text}</Alert>
    </Stack>
  );
}

export default MyAlert