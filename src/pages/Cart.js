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
import { addDoc, collection } from 'firebase/firestore'
import db from "../utils/firebaseConfig"
import emailjs from '@emailjs/browser'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import MyAlert from '../components/MyAlert/MyAlert';

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
  const [success, setSuccess] = useState()
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
    
    
      /*
      const orderFirebase = collection(db, 'ordenes')
      const orderDoc = await addDoc(orderFirebase, newOrder)
      console.log("orden generada: ", orderDoc.id)
      setSuccess(orderDoc.id)
      clear()
      */
  }


  return (
    
    <>
       <h1 className="nombreCategoria">Mi Carrito</h1>
      <Container maxWidth="md">
      
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">cantidad</TableCell>
              <TableCell align="right">titulo</TableCell>
              <TableCell align="right">precio</TableCell>
              <TableCell align="right">accion</TableCell>
            </TableRow>
          </TableHead>
         
          <TableBody>
            {cardListItems.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
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
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button  onClick={() => setShowModal(true)}>Finalizar Compra</Button>
                </div>
                 }
      </TableContainer>
      <Modal title={estadoPedido ? 'Pedido confirmado' : 'Confirmar la compra:'} open={showModal} handleClose={() => setShowModal(false)}>
            {estadoPedido ? (
                <div>
                    <TaskAltIcon style={{ textAlign: 'center'}} color="primary" fontSize="large"/>
                    <h4 style={{ textAlign: 'center'}}> La orden se genero con exito!</h4>
                    <h5 style={{ textAlign: 'center'}}>Muchas gracias por su compra</h5>
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
                        label="Telefono" 
                        variant="outlined"
                        margin="normal" 
                        value={formValue.phone}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="email"
                        label="Email" 
                        value={formValue.email}
                        variant="outlined" 
                        margin="normal"
                        onChange={handleChange}
                    />
                    <Button type="submit" disabled={estadoPedido}>Enviar </Button> 
                </form>
            )}
            {
              mostrarError && (
                <MyAlert type="error" text="No se pudo enviar el pedido, intente mas tarde"></MyAlert>
              )
            }
        </Modal>
      </Container>
    </>
  )
}

export default Cart