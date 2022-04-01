import { useEffect, useState } from "react"

export const ControlledInput = () =>{
    const [dataForm, setDataForm] = useState({texto : '', nombre: ''})
    useEffect(() => {
      console.log('addEventlistener');
      return() => console.log('removeEventListener');
    }, [dataForm])
    
    const handleOnChange= (e) =>{
        console.log(e.target.name)
        console.log(e.target.value)
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    return(
        <>
        <input
        type="text"
        name='texto'
        value={dataForm.texto}
        onChange={handleOnChange}/>
        </>
    
)
}

export function TextComponet({condition = false}) {
 if(!condition) {
     return <h2>ud no esta logueado</h2>
 }  
 return (
     <>
     <h2>esta logueado</h2></>
 )
}

export function TextComponent2({condition = false}) {
    return(
        <>
            {condition && <h2>Usted puede ver esto</h2>}
            {!condition && <h3>Usted no ve lo otro</h3>}
        </>
    )
    
}

export function TextComponent3({condition= true}) {
    return(
        <>
            <h2>{condition ? 'Usted puede ver esto otro' : 'No veras nada'}</h2>
        </>
    )    
}

export function TextComponent4({condition = false}) {
    return(
        <>
             <h2 style={{ color : condition ? "green" : "red"}}>
                 Cambio de letras
             </h2>
        </>
    )
}

export function TextComponent6({condition = true, otro}) {
  return(
      <>
        <h2
        className={ `${condition === true ? "btnUno" : "btnDos"} ${otro || ""}`}>
            Estamos viendo componentes de cambio de color
        </h2>
      </>
  )  
}

export function TextComponent7({condition =false, otro ='btnTres'}) {
    const config= condition
    ?
    {
        className: `btnUno ${otro || "" }`,
        style: {color: 'red'},
        title:"Este es verdadero",
        nombre: 'Gary'

    }
:
    {
        className: `btnDos ${otro || "" }`,
        style:{color:'purple'},
    }

    return(
        <h2 {...config} >Configuracion</h2>
    )
}