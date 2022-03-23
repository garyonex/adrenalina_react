import './App.css';
import NavBarApp from './components/navBar';
import ItemPromise from './container/ItemPromise';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate,  } from 'react-router-dom';
import ImagenContainer from './components/ImagenContainer';
import {useState} from 'react';
import React from 'react';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/carrito/Cart';






function App() //componente
              {
    // const[count, setCount] = useState(0)
    const tit = 'Este titulo viene de app'
    const saludo = ()=> {'hola'}
    // const [props, setProps] = useState(productos)
    
    
  return (
    <CartContextProvider>
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
				<Route path='/cart' element={ <Cart/>}/>
			
				{/* asociamos cada elemento */}
				<Route path='/*' element={ <Navigate To='/' replace />}/>
				<Route path='*' element={<h1>Not Found</h1>}/>
				{/* le decimos que cualquier otra ruta a las NO especificadas me redireccione al home */}
				
			</Routes>
			{/* <ItemDetailContainer /> */}
			</div>
		</BrowserRouter>
     
	</CartContextProvider>
    
    
   
  );
}

export default App;
 