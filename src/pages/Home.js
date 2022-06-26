import React from 'react'
import ItemListContainer from "./../components/ItemListContainer/ItemListContainer"
import Container from '@mui/material/Container';
import Carrousel from './../components/Carrousel/Carrousel'
import CardList from '../components/CardList/CardList';

const Home = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Carrousel/>
        <CardList title={"Linea Tulia"} catego={"tulia"}/>
        <CardList title={"Linea Saphirus"} catego={"saphirus"}/>
      </Container>
    </>
  )
}

export default Home