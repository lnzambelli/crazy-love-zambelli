import { useState, useEffect } from 'react';
import Item from './../Item/Item'
import { Grid } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './CardList.css';
//datos internos 
import listItems from '../../utils/productsMock'

const CardList = ({title, catego}) => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        setProducts([])
        obtenerLista()
    }, [catego])

    const obtenerLista = async () => {
        const productList = listItems.filter(doc => doc.category === catego)
        return setProducts(productList)
    }

    return(
        <>
        <h2 className='titleCat'>{title}</h2>
        <Grid container spacing={2}>
            {catego ? (
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    modules={[Pagination, Navigation]}
                    navigation={true}           
                >
                    {
                        products.map( ({title, description, options, price, urlImg, urlImgFrag, id, quantity}) => {
                            return(
                                <SwiperSlide key={id}>
                                    <Item 
                                        title={title} 
                                        description={description} 
                                        price={price}
                                        urlImg={urlImg}
                                        options={options}
                                        urlImgFrag={urlImgFrag}
                                        quantity={quantity} 
                                        id={id}
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            ) : <div className='list-result-prods'>{products.map( ({title, description, price, urlImg, id, quantity}) => <Item title={title} description={description} price={price} urlImg={urlImg} quantity={quantity} id={id} />)}</div>}

        </Grid>
        </>
    )
}

export default CardList