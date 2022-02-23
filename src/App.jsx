import logo from './logo.svg';
import './App.css';
import TituloApp from './components/tituloApp';
import NavBarApp from './components/navBar';

function App() //componente
              {
    // const[count, setCount] = useState(0)
    
    
  
  return (
   <header>
      <div 
          className ='App'
          
              
          // Las {} que estan primeras es para indicar que se inserta JSX
            onClick={ ()=>console.log('soy evento de app')}
      >
        
          <TituloApp />
          <img src="" alt=""  />
          <input type="text" /> <br />
              hola soy app 
            <NavBarApp />
      </div>
    </header>
  );
}

export default App;
