import './App.css';
import TituloApp from './components/tituloApp';
import NavBarApp from './components/navBar';
import ComponenteClase from './ComponenteClase';
import Greeting from './container/Greeting';
import Div from './components/Div';
import ItemCount from './container/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemPromise from './container/ItemPromise';




function App() //componente
              {
    // const[count, setCount] = useState(0)
    const tit = 'Este titulo viene de app'
    const saludo = ()=> {'hola'}
    
  return (
    
    
      <div 
          className ='App'

      > <img src="" alt="" />
        <NavBarApp />
          <TituloApp />
          <img src="" alt=""  />
          <TituloApp />
          {/* <InputApp /> */}
              hola soy app 
            <ComponenteClase />
            <Greeting saludo ='soy un saludito'/>
            
        <div>
          {/* Contador items/ Btn Agregar */}
            {/* <ItemCount inicial ={1} stock={10} div ={ Div }/> */}
  
        </div>
          {/* <ItemListContainer/> */}
          <ItemPromise />
      </div>
    
    
   
  );
}

export default App;
