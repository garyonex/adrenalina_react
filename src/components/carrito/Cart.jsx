import { Link } from "react-router-dom"
import ItemCount from "../../container/ItemCount"
import { useCartContext } from "../../context/CartContext"
import FormularioContainer from "../formulario/FormularioContainer"
import elimi from "../imagenes/1214428.png"
import { addDoc, collection, getFirestore, updateDoc, doc, query, where, getDocs, writeBatch, documentId} from "firebase/firestore"
import { async } from "@firebase/util"
import { useState } from "react"

export default function Cart() {
 
  const [dataForm, setDataForm] = useState({
    name: '', email: '' , phone: ''
  })
  const [id, setId] = useState('')

  const { cartList, vaciarCart, eliminar} = useCartContext()
  console.log(cartList)
  const TotalPrice= cartList.reduce((acc, obj) => acc +(obj.price * obj.cantidad), 0)
  const sumar = (e)=>{
    if( e.cantidad < e.Stock){
    return (e+ 1);
    }
  }
  const crearOrden = async(e)=>{
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
    .then(e => setId(e.id))
    .cath(err=> console.error(err))
    .finally(()=>console.log('termino'))
    
//cargargar al firebase
    // const queryUpdate=doc(db, 'productos', 
    // 'QoYSrJMssw5bwyZuTdek' )
    // updateDoc(queryUpdate,{
    //   Stock:110
    // })
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
    console.log(e.target.name)
    console.log(e.target.value)
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })
}
  return (
    <div>
      
      {cartList.length ? 
      <div className="carrito">
        <div className='carrito-titulo'>
        
          <h1>Cart</h1>
           <h3>{id.length !== '' && ` El id de la compra es: ${id}`}</h3> 
              <p> Productos en carrito : {cartList.length}</p>
            
              <p>Total precio : $ {TotalPrice}</p>
        </div>
            <div className="carrito-detalle">
              
              {cartList.map(item => 
              <div className="carrito-items">
                <div key={item.id}> <img src={item.foto} />
                    <div className="carrito-elimi">
                         <button onClick={()=>eliminar(item.id)}><img src={elimi} /></button>
                    </div>
                  <p>Nombre: {item.name}</p> 
                  <p>Precio por unidad:{item.price}</p>
                  <div className="contador-btn">
                    <button >-</button>
                      <label>{item.cantidad}</label>
                    <button onClick={()=>sumar(item.cantidad)} >+</button>
                    <Link to="/">
                     <button>Seguir Comprando</button>
                    </Link>
                  </div>
                </div>
              </div>)}
          </div>
          <button onClick={vaciarCart}>Vaciar Carrito</button>
          
          <form
          onSubmit={crearOrden}>

            <input
              type="text"
              name='name'
              placeholder="name"
              value={dataForm.name}
              onChange={handleOnChange}
              required/><br/>

           <input
              type="text"
              name='phone'
              placeholder="phone"
              value={dataForm.phone}
              onChange={handleOnChange}
              required/><br/>
            

            <input
              type="text"
              name='email'
              placeholder="email"
              value={dataForm.email}
              onChange={handleOnChange}
              required/><br/>

            <button onClick={crearOrden}>Finalizar Compra</button>

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
