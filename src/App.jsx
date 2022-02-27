import logo from './logo.svg';
import './App.css';
import TituloApp from './components/tituloApp';
import NavBarApp from './components/navBar';
import ComponenteClase from './ComponenteClase';
import InputApp from './components/input/input';
import Greeting from './container/Greeting';
import { getRoles } from '@testing-library/react';
import imagen from './components/imagenes/adrenalina.png'



function App() //componente
              {
    // const[count, setCount] = useState(0)
    const tit = 'Este titulo viene de app'
    const saludo = ()=> {'hola'}
    
  return (
    
    
      <div 
          className ='App'
          
              
          // Las {} que estan primeras es para indicar que se inserta JSX
            onClick={ ()=>console.log('soy app')}
      > <img src="" alt="" />
        <NavBarApp />
          <TituloApp />
          <img src="" alt=""  />
          <TituloApp />
          <InputApp />
              hola soy app 
            
            <ComponenteClase />
            <Greeting saludo ='soy un saludito'/>
      </div>
    
    
   
  );
}

export default App;
