import Greeting from "../container/Greeting"

import LogoContainer from "./logoContainer"
import imagen from './imagenes/adrenalina.png'
import TituloApp from "./tituloApp"
import { Link, NavLink } from "react-router-dom"
import ImagenContainer from "./ImagenContainer"

const NavBar = (saludo)=>{
        return(
           
            <div className="">
                <div className="navBar-titulo">
                        <TituloApp  titulo={<img className="titulo-header" src={imagen}/>} />
                        </div>
                    <nav >
                        
                        <LogoContainer />
                        <ul >
                            {/* POR TERMINAR PENDINTE */}
                        	<li><NavLink to="/">Inicio</NavLink></li>
                            {/* <li><NavLink to="/productos" >Productos</NavLink></li> */}
                                <li><NavLink to="categoria/Romper">Romper</NavLink></li>
                                 <li><NavLink to="categoria/Golpear">Golpear</NavLink></li>
                                 <li><NavLink to="categoria/Tirar">Tirar</NavLink></li>
                                 <li><NavLink to="categoria/Protectores">Proteccion</NavLink></li>
                            {/* <li><NavLink to="/referencias">Referencias</NavLink></li>
                            <li><NavLink to ="/nosotros">Quienes Somos</NavLink></li>
                            <li><NavLink to="/contacto">Contacto</NavLink></li> */}
                        </ul>
                     
                       <button className="botonComprar">
                           <NavLink to="cart">
                        		<ImagenContainer/>
                           </NavLink>
                           <br />Click</button>
                    </nav>
                    
                
                    
            </div>
          
        
    )

}

export default NavBar