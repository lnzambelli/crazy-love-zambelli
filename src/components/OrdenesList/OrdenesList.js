import React from 'react'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import './OrdenesList.css';

const OrdenesList =  ({ordenes}) => {
  return (
    <Container className='containerOrder' sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {
            ordenes.map( ({buyer, id, items, total}) => {
                return(
                        <Card variant="outlined"  sx={{ width: 275 }}>
                            <p>{id}</p>
                            <Divider/>
                            <p>{buyer.name}</p>
                            <h6>{buyer.phone}</h6>
                            <h6>{buyer.email}</h6>
                            <Divider/>
                            <h3>${total}</h3>
                        </Card>
                )
            })
        }
        
    </Container>
  )
}

export default OrdenesList