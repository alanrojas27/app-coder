import './ItemDetail.css';
const ItemDetail = ({id, nombre, img, precio, descripcion})=>{

    return(
        <div className="div">
            <h2>{nombre}</h2>
            <img src={img}/>
            <p>
                {descripcion}
                $ {precio}
            </p>
            
        </div>
    )
}

export default ItemDetail