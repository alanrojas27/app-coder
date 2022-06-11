import './NavBar.css';
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';
const NavBar = ()=>{
    return(
        <div className=''>
            
            <nav className="navbar">
            <Link to={'/'}><h2>Escabiamos</h2></Link>
                <button className="Button-Config">Inicio</button>
                <button className="Button-Config">Mis Datos</button>
                <button className="Button-Config">Mis Pedidos</button>
                <button className="Button-Config">Descuentos</button>
                <button className="Button-Config">Ayuda</button>
                <CartWidget/>
            </nav>
        </div>
    )
}

export default NavBar