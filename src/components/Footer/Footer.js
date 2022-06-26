import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Button from '@mui/material/Button';
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'> 
        <div>
          <Button variant="text">Home</Button>
          <Button variant="text">Productos</Button>
          <Button variant="text">Mis Compras</Button>
          <Button variant="text">Contacto</Button>
        </div>

        <div>
            <a href={"https://facebook.com"} target={"_blank"}><FacebookOutlinedIcon /></a>
            <a href={"https://instagram.com"} target={"_blank"}><FacebookOutlinedIcon /></a>
            <a href={"https://twitter.com"} target={"_blank"}><FacebookOutlinedIcon /></a>
        </div>
    </footer>
  )
}

export default Footer