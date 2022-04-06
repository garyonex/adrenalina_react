import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import elimi from "../imagenes/1214428.png"
import { addDoc, collection, getFirestore, updateDoc, doc, query, where, getDocs, writeBatch, documentId} from "firebase/firestore"
import { useEffect, useState } from "react"


export default function Cart() {
 
  const [dataForm, setDataForm] = useState({
    name: '', email: '' , phone: ''
  })
  useEffect(() => {
    console.log('add')
  
    return () => {
      console.log('remove')
    }
  }, [dataForm])
  
  const [idOrden, setIdOrden] = useState('')

  const { cartList, vaciarCart, eliminar, isInCart} = useCartContext()
  // console.log(cartList)
  const TotalPrice= cartList.reduce((acc, obj) => acc +(obj.price * obj.cantidad), 0)

  const crearOrden = async (e)=>{
    e.preventDefault()
    let orden = {}
    orden.buyer = dataForm
    orden.items = cartList.map(cartItem =>{
      const id = cartItem.id;
      const nombre = cartItem.name;
      const precio = cartItem.price * cartItem.cantidad
      
        return {id, precio, nombre}
    }) 
    console.log(orden)

//CREAR EN FIREBASE
    const db = getFirestore()
    const queryCollectionSet = collection(db, 'ordenes')
    addDoc(queryCollectionSet, orden)
    .then(resp => setIdOrden(resp.id))
    .cath(err=> console.error(err))
    .finally(()=>console.log('termino'))
    

    const queryCollection = collection(db,'productos')
    const queryActStock = await query(
      queryCollection, where(documentId(), 'in', cartList.map(it => it.id ))
    )
      const batch = writeBatch(db)

    await getDocs(queryActStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref,{
      Stock: res.data().Stock - cartList.find(item => item.id === res.id).cantidad
    })))
    
    batch.commit()
  }
  const handleOnChange= (e) =>{
    
    // console.log(e.target.value)
      setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value
      })
}
    console.log(dataForm);
  return (
    <div>
      
      {cartList.length ? 
      <div className="carrito">
        <div className='carrito-titulo'>
        
          <h1>Cart</h1>
           <h3>{idOrden.length !== '' && ` El id de la compra es: ${idOrden} `}</h3> 
              <p> Productos en carrito : {cartList.length}</p>
            
              <p>Total precio : $ {TotalPrice}</p>
        </div>
            <div className="carrito-detalle">
              
              {cartList.map(item => 
              <li key={item.id}>
                <div className="carrito-items">
                  <div > <img src={item.foto} />
                      <div className="carrito-elimi">
                          <button onClick={()=>eliminar(item.id)}><img src={elimi} /></button>
                      </div>{isInCart(item.id)}
                    <p>Nombre: {item.name}</p> 
                    <p>Precio por unidad:{item.price}</p>
                    <div className="contador-btn">
                        <label>{item.cantidad}</label>
                      <Link to="/">
                      <button>Seguir Comprando</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>)}
          </div>
          <button onClick={vaciarCart}>Vaciar Carrito</button>
          
          <form
             onSubmit={crearOrden}
            >

            <input
              type="text"
              name='name'
              placeholder="name"
              value={dataForm.name}
              onChange={handleOnChange}
             /><br/>

           <input
              type="text"
              name='phone'
              placeholder="phone"
              value={dataForm.phone}
              onChange={handleOnChange}
             /><br/>
            

            <input className="emailValidar"
              type="email"
              name='email'
              placeholder="email"
              value={dataForm.email}  
              onChange={handleOnChange}
              /><br/>
           
            <input className="emailValidarDos"
              type="email"
              name='email'
              placeholder="Repetir email"
              value={dataForm.email}  
              onChange={handleOnChange}
              /><br/>

            <Link to="/compraFinal">
                    <button >Finalizar Compra</button>
            </Link>

          </form>
         
      </div>
        :
        <div className="carrito">
          <div className="carrito-titulo">
            <h1>Carrito de compra vacio</h1>
            <Link to="/">
              <button className="carrito-alert">Agregar Productos</button>
            </Link>
          </div>
        </div>
      }
    </div>
  )
}
