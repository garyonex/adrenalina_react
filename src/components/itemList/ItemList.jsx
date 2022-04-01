import { memo } from "react"
import Item from "../item/Item"

const ItemList = 
memo(({muestra}) => {
  return (
    muestra.map((prod)=><Item key={prod.id} prod={prod} />)
  )
}, (oldProps, newProps) => oldProps.productos.length === newProps.productos.length)

export default ItemList
