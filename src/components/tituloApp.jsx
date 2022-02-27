
  
  //Esto es un componente

  const TituloApp =({titulo, subtitulo, saludo}) => {

    return (
        <div>
            <h1>{ titulo }</h1>
            <h2>{subtitulo}</h2>
            {/* <button onClick={saludo}>ejecutar saludo</button> */}
        </div>
    )
    
}

export default TituloApp