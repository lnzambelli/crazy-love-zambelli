import React from 'react'
import ItemListContainer from "./../components/ItemListContainer/ItemListContainer"
import BannerPage from '../components/BannerPage/BannerPage'


const Home = () => {
  return (
    <>
      <BannerPage title="Mi Home" />
      <ItemListContainer/>
    </>
  )
}

export default Home