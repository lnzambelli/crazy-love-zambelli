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
            items.map( ({id,title,description, options,price,quantity, urlImg, urlImgFrag}) => {

                return(
                    <Grid item md={3} key={id} className="itemsContainer">
                        <Item id={id} title={title} description={description} price={price} urlImg={urlImg} quantity={quantity}  options={options} urlImgFrag={urlImgFrag}></Item>
                    </Grid>
                )
            })
        }
    </Grid>
    </>
  )
}

export default ItemList
