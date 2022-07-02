import React from 'react'
import BannerPage from '../components/BannerPage/BannerPage'
import OrdenesListContainer from '../components/OrdenesListContainer/OrdenesListContainer'

const MisCompras = () => {
  return (
    <>
      <h1 className="nombreCategoria">Mis Ordenes de Compra</h1>
      <OrdenesListContainer/>
    </>
  )
}

export default MisCompras