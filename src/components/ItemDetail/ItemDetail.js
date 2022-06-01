import React from 'react'
import Card from '@mui/material/Card';
import './ItemDetail.css'
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ItemCount from './../ItemCount/ItemCount'

const ItemDetail = ({data}) => {

    const fragrance = ['Vainilla', 'Citrus',"Bebe"];
    const size = ['250cc', '500cc',"750cc"];
    const [value, setValue] = React.useState(2);
    return (
            <Card  className="containerDetail" >
                <img src={data.urlImg} className="imgDetail"></img>
                <Card className='infoDetail'>
                    <h1>{data.title}</h1>
                    <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                    <h2>${data.price}</h2>
                    <Autocomplete disablePortal  options={fragrance}sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="Fragancia" />}/>
                    <Autocomplete disablePortal  options={size}sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="Tamaño" />}/>
                    <ItemCount/>
                    <p>{data.description}</p>
                   
                </Card>
        </Card>  
    )
}

export default ItemDetail