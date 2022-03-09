import Item from "../item/Item"

const ItemList = ({muestra}) => {
  return (
    muestra.map((prod)=><Item key={prod.id} prod={prod} />)
  )
}

export default ItemList