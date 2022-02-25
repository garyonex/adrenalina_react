import logo from './logo.svg';
import './App.css';
import TituloApp from './components/tituloApp';
import NavBarApp from './components/navBar';
import ComponenteClase from './ComponenteClase';
import InputApp from './components/input/input';
import Greeting from './components/Greeting';
import { getRoles } from '@testing-library/react';



function App() //componente
              {
    // const[count, setCount] = useState(0)
    const tit = 'Este titulo viene de app'
    const saludo = ()=> {'hola'}
    const chao = <Greeting />
  return (
   <header>
      <div 
          className ='App'
          
              
          // Las {} que estan primeras es para indicar que se inserta JSX
            onClick={ ()=>console.log('soy app')}
      >
        <NavBarApp />
          <TituloApp titulo ={tit} subtitulo ='soy subtitulo'saludo={saludo} />
          <img src="" alt=""  />
          <TituloApp saludo={() => console.log(<Greeting />)} />
          <InputApp />
              hola soy app 
            <img src="" alt="" />
            <ComponenteClase />
      </div>
    </header>
    
   
  );
}

export default App;
