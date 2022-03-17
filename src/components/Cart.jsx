import Greeting from "../container/Greeting"

 const Cart= () =>{
   const stilo ={
     height:60,
     widtg: 60,
     borderRadius: 100, 
     
   }
  return(
	<div>
		<Greeting saludo={'Soy el cart'}/>
		<img style={stilo} src="https://img.freepik.com/vector-gratis/venta-carrito-compras-completo-pictograma-rojo_1284-8505.jpg?size=338&ext=jpg" alt="carrito compras"  />
	</div>

  )
}
export default Cart