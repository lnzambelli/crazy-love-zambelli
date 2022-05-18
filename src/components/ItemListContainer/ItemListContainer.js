import { Fragment } from "react"
import ItemCount from "../ItemCount/ItemCount"
import './ItemListContainer.css'

const ItemListContainer = ({title}) => {
    return(
        <Fragment >
            <h1>{title}</h1>
            <ItemCount />
        </Fragment>
    )
}

export default ItemListContainer