import React from 'react'
import './Nosotros.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';

const Nosotros = () => {
  return (
    <section>
          <div className='contentNosotros'>
              <article className='cardNosotros'>
                  <LocalShippingIcon className='iconNosotros'/>
                  <h5>Envío gratuito</h5>
                  <small>A todo el pais</small>
              </article>
              <article className='cardNosotros'>
                  <PaidOutlinedIcon className='iconNosotros'/>
                  <h5>Formas de pago</h5>
                  <small>Efectivo, transferencia o mercado pago</small>
              </article>
              <article className='cardNosotros'>
                  <CardGiftcardOutlinedIcon className='iconNosotros'/>
                  <h5>Presentaciones</h5>
                  <small>Regalos personalizados</small>
              </article>
          </div>
    </section>
  )
}

export default Nosotros