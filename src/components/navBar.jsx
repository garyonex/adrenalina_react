import Greeting from "../container/Greeting"
import Cart from "./Cart"
import LogoContainer from "./logoContainer"
import imagen from './imagenes/adrenalina.png'
import TituloApp from "./tituloApp"
import { NavLink } from "react-router-dom"

const NavBar = (saludo)=>{
        return(
           
            <div className="">
                <div className="navBar-titulo">
                        <TituloApp  titulo={<img className="titulo-header" src={imagen}/>} />
                        </div>
                    <nav >
                        
                        <LogoContainer />
                        <ul > 
                        
                        	<li><NavLink to="/">Inicio</NavLink></li>
                            <li><a href="#">Productos</a></li>
                            <li><a href="#">Referencias</a></li>
                            <li><a href="#">Quienes somos</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                     
                       <button className="botonComprar">
                           <NavLink to="cart">
                        		<Cart />
                           </NavLink>
                           <br />Click</button>
                    </nav>
                    
                
                    
            </div>
          
        
    )

}

export default NavBar