import './App.css';
import NavBarApp from './components/navBar';
import ItemPromise from './container/ItemPromise';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/carrito/Cart';
import getFirestoreApp from './firebase/configFirebase';
import CompraFinal from './components/compraFinal/CompraFinal';
getFirestoreApp();

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <div className='App'>
                    <NavBarApp />
                    <Routes>
                        <Route path='/' element={<ItemPromise />} />
                        <Route
                            path='/categoria/:categoriaId'
                            element={<ItemPromise />}
                        />
                        <Route
                            path='/detalle/:detalleId'
                            element={<ItemDetailContainer />}
                        />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/compraFinal' element={<CompraFinal />} />

                        <Route
                            path='*'
                            element={
                                <center>
                                    <h1 className='not-found'>Not Found</h1>
                                </center>
                            }
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;
