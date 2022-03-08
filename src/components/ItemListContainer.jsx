export default function ItemListContainer (){
    
    const Productos = [
        {id: '1', name: 'Botella', description: 'Roja', Stock: 10},
        {id: '2', name: 'Televisor', description: 'Plasma', Stock: 15},
        {id: '3', name: 'Compu', description: 'Verde', Stock: 100},
    ]
    
    const task = new Promise((resolve,reject)=>{
    //     let url = Productos
    //     if(url === Productos){
            // setTimeout(()=>{
            //   resolve('Productos')
            // },3000)
    //     }else{
    //         reject('400 not found')
    //     }
    // },setTimeout(3000))
    // task
    // .then((resp)=>console.log(resp))
    // .catch(error=>console.log(error))
    resolve(Productos)
    });
    setTimeout(()=>{
        task
        .then((respuesta)=>{
            console.table(respuesta);

        })
        .catch((error)=>{
            console.log('Hay un error');
        })
    },3000)

    return (
        <div> Prueba clase Promesas</div>
    )
}


