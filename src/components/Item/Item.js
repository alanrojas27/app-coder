import './Item.css';
import {Link} from 'react-router-dom'

const Item = ({nombre, img, id})=> {
    return(
        <>
            <li className="card">
                {nombre}
                <img src={img}/>
                <Link to={`/detail/${id}`}>Comprar</Link>
            </li>
            
            
        </>
    )
}

export default Item