import React from 'react'
import Container from '@mui/material/Container';
import Carrousel from './../components/Carrousel/Carrousel'
import CardList from '../components/CardList/CardList';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom'
import Nosotros from '../components/Nosotros/Nosotros';

const Home = () => {
  return (
    <>
      <Carrousel/>
      <Container maxWidth="xl">
        <Nosotros/>
        <Box sx={{ width: '100%' }}>
          <h2 className='tituloNuestros'>Nuestros productos</h2>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4}>
                <Link to="/productos/saphirus">
                    <img className="imgCat" src='assets/categoria6.jpeg'/>
                </Link>
            </Grid>
            <Grid item xs={4}>
                <Link to="/productos/milano">
                    <img className="imgCat" src='assets/categoria3.jpeg'/>
                </Link>
            </Grid>
            <Grid item xs={4}>
                <Link to="/productos/decoracion">
                  <img className="imgCat" src='assets/categoria1.jpeg'/>
                </Link>
            </Grid>
            <Grid item xs={4}>
                <Link to="/productos/sagrada">
                  <img className="imgCat" src='assets/categoria2.jpeg'/>
                </Link>
            </Grid>
            <Grid item xs={4}>
                <Link to="/productos/natural">
                  <img className="imgCat" src='assets/categoria4.jpeg'/>
                </Link>
            </Grid>
            <Grid item xs={4}>
                <Link to="/productos/velas">
                  <img className="imgCat" src='assets/categoria5.jpeg'/>
                </Link>
            </Grid>
          </Grid>
        </Box>
          <CardList title={"Mas Vendidos"} catego={"saphirus"}/>
      </Container>
    </>
  )
}

export default Home