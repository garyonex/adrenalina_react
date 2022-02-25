import Greeting from "./Greeting"
import ImagenContainer from "./ImagenContainer"
import LogoContainer from "./logoContainer"

import TituloApp from "./tituloApp"
<Greeting />
const NavBar = (saludo)=>{
        return(
           
            <div className="">
                <div className="navBar-titulo">
                        <TituloApp  titulo={<img src="https://fontmeme.com/temporary/742a6993b7956acb67a51e4c432db9ef.png"/>} />
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
                       <button onClick={saludo}><ImagenContainer /><br />Click</button>
                    </nav>
                    
            </div>
          
        
    )

}

export default NavBar