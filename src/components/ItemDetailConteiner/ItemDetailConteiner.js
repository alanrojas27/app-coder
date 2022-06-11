import { useState, useEffect } from "react"
import { getProductoById } from '../listaProductos'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = ()=>{
    const[product, setProducto] = useState()
    const params = useParams()

    useEffect(()=>{
    getProductoById(params.productId).then( response=> {
        setProducto(response)
    })
}, [])

console.log(product)
    return(
        <>
            <h1>Descripción</h1>
            <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer