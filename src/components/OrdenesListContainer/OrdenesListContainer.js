import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import OrdenesList from '../OrdenesList/OrdenesList';
import { useState, useEffect } from 'react';
//firestore
import {collection, getDocs} from 'firebase/firestore'
import db from '../../utils/firebaseConfig';


const OrdenesListContainer = () => {
    const [cargando, setCargando] = useState(false)
    const [ordenes, setOrdenes] = useState([])

    useEffect( () => {
        getOrdenes().then((ordenes)=>{  
            setOrdenes(ordenes)
        })
       
    }, [])

    const getOrdenes = async () =>{
        
        const OrdenesSnapshot = await getDocs(collection(db,"ordenes"));
        
        const ordenList = OrdenesSnapshot.docs.map((doc)=>{
            let orden = doc.data()
            orden.id = doc.id
            return orden
        })
        return ordenList
    } 
    

  return (
    <div className='general-container'>
          {!cargando ?
              <OrdenesList ordenes={ordenes}/>
           :  <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                  <LinearProgress color="secondary" />
                  <LinearProgress color="success" />
                  <LinearProgress color="inherit" />
              </Stack>
          }
      </div>
  )
}

export default OrdenesListContainer