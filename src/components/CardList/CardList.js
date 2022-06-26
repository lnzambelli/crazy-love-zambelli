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
//Firestore
import db from '../../utils/firebaseConfig';
import { collection, getDocs, query, where } from "firebase/firestore";

const CardList = ({title, catego}) => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        setProducts([])
        console.log()
        getProducts()
        .then( (productos) => {
            catego ?  filterFirebase() : setProducts(productos)
        })
    }, [catego])

    const getProducts = async () => {
        const productCollection = collection(db, "products")
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    const filterFirebase = async () => {
        const productRef = collection(db, 'products')
        const queryResult = query(productRef, where("category", "==", catego));
        const querySnapshot = await getDocs(queryResult);
        const productList = querySnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return setProducts(productList)
    }

    return(
        <>
        <h2 className='title-img-list'>{title}</h2>
        <Grid container spacing={2}>
            {!catego ? (
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    modules={[Pagination, Navigation]}
                    navigation={true}            
                >
                    {
                        products.map( ({title, description, price, urlImg, id, quantity}) => {
                            return(
                                <SwiperSlide key={id}>
                                    <Item 
                                        title={title} 
                                        description={description} 
                                        price={price}
                                        urlImg={urlImg}
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