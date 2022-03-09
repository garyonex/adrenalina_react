import { useState } from 'react'


const task = new Promise((resolve, reject)=>{
  //tareas que realizaremos
  // console.log('hola soy promesa');
  let url = 'gary.com'
  if(url === 'gary.com'){
    resolve('200 ok')
  }else{
    reject('400 not found')
  }
  
})

function ItemListContainer () {
//   console.log(task);
	task
	.then((respuesta)=>{
	throw new Error('Esto es un error')// esto es un error de 'codigo' aunque este resuelto
	console.log(respuesta)}, 
		// (error)=>console.log(error)
	)
	.catch(error=>console.log(error))// con esto no se rompela aplicacion a pesar de que haya un error
		//esto captura todo
  return(
    <div>ItemListContainer</div>
  
  )
}
export default ItemListContainer

