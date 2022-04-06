import { useState } from "react"
import {useCartContext} from "../../context/CartContext"
import { addDoc, collection, getFirestore, updateDoc, doc, query, where, getDocs, writeBatch, documentId} from "firebase/firestore"

export default function CompraFinal() {

const { cartList } = useCartContext()
const [idOrden, setIdOrden] = useState('')
const [dataForm, setDataForm] = useState({
    name: '' , email: '', phone: ''
})
let day= Date()

  return (
      <div>
          <h3>{idOrden.length !== '' && ` El id de la compra es: ${idOrden} `}</h3> 
          <p> Productos en carrito : {cartList.length}</p>
            <p>{day}</p>
          <p>{dataForm.name}</p>
          <p>{dataForm.phone}</p>
          <p>{dataForm.email}</p>
      </div>
  )
}

