import React from 'react'
import Container from '@mui/material/Container';
import Carrousel from './../components/Carrousel/Carrousel'
import CardList from '../components/CardList/CardList';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom'
import Nosotros from '../components/Nosotros/Nosotros';

import catsaphirus from './../imagenes/assets/CATEGORIAS/catsaphirus.jpg';
import catmilano from './../imagenes/assets/CATEGORIAS/catmilano.jpg';
import catdeco from './../imagenes/assets/CATEGORIAS/catdeco.jpg';
import catsagradamadre from './../imagenes/assets/CATEGORIAS/catsagradamadre.jpg';
import catiluminarte from './../imagenes/assets/CATEGORIAS/catiluminarte.jpg';
import catmates from './../imagenes/assets/CATEGORIAS/catmates.jpg';
import catremeras from './../imagenes/assets/CATEGORIAS/catremeras.jpg';
import catregalos from './../imagenes/assets/CATEGORIAS/catregalos.jpg';

const Home = () => {
  return (
    <>
      <Carrousel/>
      <Container maxWidth="xl">
        <div className='infoEmpresa'>
          <Nosotros/>
        </div>
        <Box sx={{ width: '100%' }}>
          <h2 className='tituloNuestros'>Nuestros Productos</h2>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
            <Grid item xs={6} md={3}>
                <Link to="/productos/saphirus">
                    <img className="imgCat" src={catsaphirus}/>
                </Link>
            </Grid>
            <Grid item xs={6} md={3}>
                <Link to="/productos/milano">
                    <img className="imgCat" src={catmilano}/>
                </Link>
            </Grid>
            <Grid item xs={6} md={3}>
                <Link to="/productos/decoracion">
                  <img className="imgCat" src={catdeco}/>
                </Link>
            </Grid>
            <Grid item xs={6} md={3}>
                <Link to="/productos/sagrada">
                  <img className="imgCat" src={catsagradamadre}/>
                </Link>
            </Grid>
            <Grid item xs={6} md={3}>
                <Link to="/productos/iluminarte">
                  <img className="imgCat" src={catiluminarte}/>
                </Link>
            </Grid>
            <Grid item xs={6} md={3}>
                <Link to="/productos/mates">
                  <img className="imgCat" src={catmates}/>
                </Link>
            </Grid>
            <Grid item xs={6} md={3}>
                <Link to="/productos/remeras">
                  <img className="imgCat" src={catremeras}/>
                </Link>
            </Grid>
            <Grid item xs={6} md={3}>
                <Link to="/productos/regalos">
                  <img className="imgCat" src={catregalos}/>
                </Link>
            </Grid>
          </Grid>
        </Box>
        <div className="nuevosProd">
          <CardList title={"Nuevos Productos"} catego={"mates"} />
        </div>
      </Container>
    </>
  )
}

export default Home