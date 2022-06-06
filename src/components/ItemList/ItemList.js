import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'
import { Grid } from '@mui/material';

const ItemList = ({title, items}) => {
  return(
    <>
    <h1 className='titleProduct'>{title}</h1>
    <Grid container spacing={2}>
        {
            items.map( ({codArt,title,description,price,quantity, urlImg}) => {

                return(
                    <Grid item md={3} key={codArt} className="itemsContainer">
                        <Item codArt={codArt} title={title} description={description} price={price} urlImg={urlImg} quantity={quantity} ></Item>
                    </Grid>
                )
            })
        }
    </Grid>
    </>
  )
}

export default ItemList
