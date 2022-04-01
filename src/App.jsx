import './App.css';
import NavBarApp from './components/navBar';
import ItemPromise from './container/ItemPromise';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate,  } from 'react-router-dom';
import React from 'react';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/carrito/Cart';
import { TextComponent2, TextComponent3, TextComponent4, TextComponent6, TextComponent7, TextComponet } from './components/condicionales/ComponentesCondicionales';
import getFirestoreApp from './firebase/configFirebase';
getFirestoreApp()


	


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
     <center>
		 {/* <TextComponet/> */}
		 {/* <TextComponent2/> */}
		 {/* <TextComponent3/> */}
		 {/* <TextComponent4/> */}
		 {/* <TextComponent6 otro={"btnTres"}/> */}
		 {/* <TextComponent7/> */}
	 </center>
	</CartContextProvider>
    
    
   
  );
}

export default App;
 