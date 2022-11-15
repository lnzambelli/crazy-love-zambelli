import React from 'react'
import Container from '@mui/material/Container';
import Carrousel from './../components/Carrousel/Carrousel'
import CardList from '../components/CardList/CardList';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import {Link} from 'react-router-dom'
import Nosotros from '../components/Nosotros/Nosotros';
import Grid2 from '@mui/material/Unstable_Grid2';

const Home = () => {
  return (
    <>
      <Carrousel/>
      <Container maxWidth="xl">
        <Nosotros/>
        <Box sx={{ width: '100%' }}>
          <h2 className='tituloNuestros'>Nuestros productos</h2>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
            <Grid item xs={6} md={3}>
                <Link to="/productos/saphirus">
                    <img className="imgCat" src='assets/categorias/catsaphirus.jpg'/>
                </Link>
            </Grid>
            <Grid item xs={6} md={3}>
                <Link to="/productos/milano">
                    <img className="imgCat" src='assets/categorias/catmilano.jpg'/>
                </Link>
            </Grid>
            <Grid item xs={6} md={3}>
                <Link to="/productos/decoracion">
                  <img className="imgCat" src='assets/categorias/catdeco.jpg'/>
                </Link>
            </Grid>
            <Grid item xs={6} md={3}>
                <Link to="/productos/sagrada">
                  <img className="imgCat" src='assets/categorias/catsagradamadre.jpg'/>
                </Link>
            </Grid>
            <Grid item xs={6} md={3}>
                <Link to="/productos/iluminarte">
                  <img className="imgCat" src='assets/categorias/catiluminarte.jpg'/>
                </Link>
            </Grid>
            <Grid item xs={6} md={3}>
                <Link to="/productos/mates">
                  <img className="imgCat" src='assets/categorias/catmates.jpg'/>
                </Link>
            </Grid>
            <Grid item xs={6} md={3}>
                <Link to="/productos/remeras">
                  <img className="imgCat" src='assets/categorias/catremeras.jpg'/>
                </Link>
            </Grid>
            <Grid item xs={6} md={3}>
                <Link to="/productos/regalos">
                  <img className="imgCat" src='assets/categorias/catregalos.jpg'/>
                </Link>
            </Grid>
          </Grid>
        </Box>
        <CardList title={"Nuevos Productos"} catego={"mates"}/>
      </Container>
    </>
  )
}

export default Home