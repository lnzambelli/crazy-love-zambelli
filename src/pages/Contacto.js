import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import BannerPage from '../components/BannerPage/BannerPage'

const Contacto = () => {

  return (
    <section >
     <BannerPage title="Contactanos.." />

    <div>
        <div style={{display: 'flex'}}>
            <article  style={{width: '30%'}} >
                <EmailIcon />
                <h4>Email</h4>
                <h5>lnzambelli@gmail.com</h5>
                <a href={"lnzambelli@gmail.com"} target={'_blank'} >Enviar un mensaje</a>
            </article>
            <article  style={{width: '30%'}}>
                <InstagramIcon  />
                <h4>Instagram</h4>
                <h5>lnzambelli</h5>
                <a href={"https://m.me/lnzambelli"} target={'_blank'} >Enviar un mensaje</a>
            </article>
            <article  style={{width: '30%'}}>
                <WhatsAppIcon/>
                <h4>Whatsapp</h4>
                <h5>123456789</h5>
                <a href={"https://api.whatsapp.com/phone=+123456789"} target={'_blank'} >Enviar un mensaje</a>
            </article>
        </div>
        <form style={{margin: '16px', display: 'flex', justifyContent: 'center'}} >
            <TextField id="outlined-basic" label="Nombre" variant="outlined"   />
            <TextField id="outlined-basic" label="Correo" variant="outlined" style={{margin: '0px 8px'}}/>
            <Button variant="contained">Enviar</Button>
        </form>
    </div>

</section>
  )
}

export default Contacto