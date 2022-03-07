import Greeting from "../container/Greeting"
import ImagenContainer from "./ImagenContainer"
import LogoContainer from "./logoContainer"
import imagen from './imagenes/adrenalina.png'
import TituloApp from "./tituloApp"

const NavBar = (saludo)=>{
        return(
           
            <div className="">
                <div className="navBar-titulo">
                        <TituloApp  titulo={<img className="titulo-header" src={imagen}/>} />
                        </div>
                    <nav >
                        
                        <LogoContainer />
                        <ul > 
                        
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Productos</a></li>
                            <li><a href="#">Referencias</a></li>
                            <li><a href="#">Quienes somos</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                     
                       <button className="botonComprar"><ImagenContainer /><br />Click</button>
                    </nav>
                    
                
                    
            </div>
          
        
    )

}

export default NavBar