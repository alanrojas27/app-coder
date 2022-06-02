import { useState, useEffect } from "react"
import { getProductos } from "../listaProductos"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = (props)=>{
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductos().then(response => {
            setProductos(response)
        })
    }, [])

    return(
        <div>
            <h1>{props.greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer