import { useCartContext } from '../context/CartContext';

export default function ImagenContainer() {
    const { cartList } = useCartContext();

    return (
        <div className='contenedor-img-cart'>
            <img
                className='imagen-container'
                src='https://img.freepik.com/vector-gratis/venta-carrito-compras-completo-pictograma-rojo_1284-8505.jpg?size=338&ext=jpg'
                alt='carrito compras'
            />
            <br />
            {cartList.length ? (
                <p className='imagen-container_ctn'>{cartList.length}</p>
            ) : (
                ''
            )}
        </div>
    );
}
