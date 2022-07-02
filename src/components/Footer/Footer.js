import React from 'react'
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'> 
        <div>
          <Button variant="text" className='btnPage'>Home</Button>
          <Button variant="text" className='btnPage'>Productos</Button>
          <Button variant="text" className='btnPage'>Mis Compras</Button>
          <Button variant="text" className='btnPage'>Contacto</Button>
        </div>

        <div>
            <a href={"https://facebook.com"} target={"_blank"}><FacebookIcon /></a>
            <a href={"https://instagram.com"} target={"_blank"}><InstagramIcon /></a>
            <a href={"https://whatsapp.com"} target={"_blank"}><WhatsAppIcon /></a>
        </div>
    </footer>
  )
}

export default Footer