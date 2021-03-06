import React from 'react'
import './FormContacto.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CallIcon from '@mui/icons-material/Call';

const FormContacto = () => {
  return (
    <div className='container'>
        <div  className='informationContainer'>
            <article >
                <EmailIcon />
                <h5>crazylove@gmail.com</h5>
            </article>
            <article>
                <AddLocationIcon  />
                <h5>Av. Santa Fe 2000, Rafaela</h5>
            </article>
            <article>
                <CallIcon/>
                <h5>123456789</h5>
            </article>
        </div>   
        <form className='formContainer' >
                <TextField id="outlined-basic" label="Nombre" variant="outlined" className='formTextField' margin="normal" required/>
                <TextField id="outlined-basic" label="Correo" variant="outlined" className='formTextField'margin="normal" required/>
                <TextField id="outlined-multiline-static" label="Escriba aqui.." multiline rows={4} className='formTextField'margin="normal" required/>
                <div>
                    <Button variant="contained">Enviar</Button>
                </div>   
        </form>
    </div>
  )
}

export default FormContacto