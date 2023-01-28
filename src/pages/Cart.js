import React from 'react'
import { Delete } from "@mui/icons-material"
import CartContext from "../context/CartContext"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext,useState  } from "react";
import { useNavigate } from "react-router-dom"
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Modal from '../components/Modal/Modal'
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import emailjs from '@emailjs/browser'
import MyAlert from '../components/MyAlert/MyAlert';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const Cart = () => {

  const { cardListItems, deleteProduct, clear,totalPrice  } = useContext(CartContext)

  const [showModal, setShowModal] = useState(false)
  const [estadoPedido, setEstadoPedido] = useState(false)
  const [mostrarError, setMostrarError] = useState(false)
  const [formValue, setFormValue] = useState({
      name: '',
      phone: '',
      email: ''
  })
  const [order, setOrder] = useState({
      buyer: {},
      items: cardListItems.map( item => {
          return `${item.quantity} ${item.title} ${item.opcion} ${item.price} - `
      } ),
      total: totalPrice
  })
  const navigate = useNavigate()


  const handleSubmit = (e) => {
      e.preventDefault()
      setOrder({...order, buyer: formValue})
      saveData({...order, buyer: formValue})
  }

  //DRY = Dont Repeat Yourself
  const handleChange = (e) => {
      setFormValue({...formValue, [e.target.name]: e.target.value})
  }

  const finishOrder = () => {
      clear()
      navigate('/')
  }
 
  const saveData =  (newOrder) => {
    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, newOrder, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        setEstadoPedido(true)
        
      }, (error) => {
          setMostrarError(true)
          console.log(error.text);
    });
  }


  return (
    
    <>
      <Card width="100%">
            <CardMedia
              component="img"
              height="250"
              image={`/assets/portadas/miCarrito.jpg`}
              alt="productos"
            />
      </Card>
      <Container className='containerPpal'>
      
      {cardListItems.length== 0 ? navigate('/') : 
      <TableContainer component={Paper} className="contenidoTabla">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className='columnaImgCart'></TableCell>
              <TableCell align="right">cantidad</TableCell>
              <TableCell align="right">título</TableCell>
              <TableCell align="right">precio</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
         
          <TableBody>
            {cardListItems.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell >
                    <img className='imgPageCart' src={`${row.urlImg}`} />
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.title} <strong>{row.opcion}</strong></TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">
                    <Button onClick={()=>deleteProduct(row)}> <Delete/></Button>         
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
         
        </Table>
                { totalPrice>0 && 
                <div>
                    <div >
                      <Chip label={`TOTAL $${totalPrice}`} color="primary" style={{fontSize: '1rem'}}/>
                    </div>
                    <Button  onClick={() => setShowModal(true)}>Finalizar Compra</Button>
                </div>
                 }
      </TableContainer>
      }
      <Modal title={estadoPedido ? 'Pedido confirmado' : 'Confirmar la compra:'} open={showModal} handleClose={() => setShowModal(false)}>
            {estadoPedido ? (
                <div>
                    <Card width="100%">
                          <CardMedia
                            component="img"
                            height="300"
                            image={`/assets/portadas/compraConfirmada.jpg`}
                            alt="compra"
                          />
                    </Card>
                    <Button onClick={finishOrder} style={{ width: '100%'}}>Aceptar</Button>
                </div>
            ) : (
                <form className="form-contact" onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-basic" 
                        name="name"
                        label="Nombre y Apellido" 
                        variant="outlined"
                        margin="normal" 
                        value={formValue.name}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="phone"
                        type="number"
                        label="Teléfono" 
                        variant="outlined"
                        margin="normal" 
                        value={formValue.phone}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="email"
                        label="Comentario" 
                        value={formValue.email}
                        variant="outlined" 
                        margin="normal"
                        onChange={handleChange}
                    />
                    <Button type="submit" disabled={estadoPedido || formValue.phone.length<6 || formValue.name.length<6} >Enviar </Button> 
                </form>
            )}
            {
              mostrarError && (
                <MyAlert type="error" text="No se pudo enviar el pedido, intente más tarde"></MyAlert>
              )
            }
        </Modal>
      </Container>
    </>
  )
}

export default Cart