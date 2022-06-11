import React from 'react'
import BannerPage from '../components/BannerPage/BannerPage'
import { Delete } from "@mui/icons-material"
import CartContext from "../context/CartContext"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Cart = () => {

  const { cardListItems, deleteProduct, clear,totalPrice  } = useContext(CartContext)

  return (
    
    <>
      <BannerPage title="Mi Cart" />
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
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">
                    <Button onClick={()=>deleteProduct(row)}> <Delete/></Button>         
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
                <div>
                    <div >
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button>Finalizar Compra</Button>
                </div>
      </TableContainer>
      </Container>
    </>
  )
}

export default Cart