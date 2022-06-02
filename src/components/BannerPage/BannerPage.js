import React from 'react'
import './BannerPage.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const BannerPage = ({title}) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="100%">
        <Box sx={{ bgcolor: '#cfe8fc', height: '30vh' }}>
            <h1>{title}</h1>
        </Box>
      </Container>
    </>
  )
}

export default BannerPage