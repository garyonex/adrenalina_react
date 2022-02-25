import Greeting from "./Greeting"
import ImagenContainer from "./ImagenContainer"
import LogoContainer from "./logoContainer"

import TituloApp from "./tituloApp"

const NavBar = (saludo)=>{
        return(
           
            <div className="">
                <div className="navBar-titulo">
                        <TituloApp  titulo={<img src="./imagenes/logoGolpea.png"/>} />
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
                     
                       {/* <button onClick={saludo}><ImagenContainer /><br />Click</button> */}
                    </nav>
                
                    
            </div>
          
        
    )

}

export default NavBar