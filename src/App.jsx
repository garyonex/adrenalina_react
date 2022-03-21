import './App.css';
import TituloApp from './components/tituloApp';
import NavBarApp from './components/navBar';
import ComponenteClase from './ComponenteClase';
import Greeting from './container/Greeting';
import Item from './components/item/Item'
import ItemPromise from './container/ItemPromise';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetail from './components/itemDetail/ItemDetail';
import Cart from './components/carrito/Cart';
import ImagenContainer from './components/ImagenContainer';
import InputApp from './components/input/InputApp';






function App() //componente
              {
    // const[count, setCount] = useState(0)
    const tit = 'Este titulo viene de app'
    const saludo = ()=> {'hola'}
    
  return (
      <BrowserRouter>

        <div 
            className ='App'
        > 
        <img src="" alt="" />
          <NavBarApp />
        
         <Routes>
            <Route path='/' element={<ItemPromise />} />
            <Route path='/categoria/:categoriaId' element={<ItemPromise />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={ <ImagenContainer/>}/>
           
            {/* asociamos cada elemento */}
            <Route path='/*' element={ <Navigate To='/' replace />}/>
            <Route path='*' element={<h1>Not Found</h1>}/>
            {/* le decimos que cualquier otra ruta a las NO especificadas me redireccione al home */}
              
         </Routes>
         {/* <ItemDet ailContainer /> */}
         
        </div>
      </BrowserRouter>
    
    
    
   
  );
}

export default App;
