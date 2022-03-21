import TituloApp from "../tituloApp"

const InputApp = ({children})=>{
    // console.log(children);
    const vocales=(e)=>{
      if(
        e.key === 'a'||
        e.key === 'e'||
        e.key === 'i'||
        e.key === 'o'||
        e.key === 'u'
        
      )
      e.preventDefault()
      
    }
    const inputHandler =(evt) =>{
      evt.preventDefault()
      // no permite escribir nada
      console.log(evt.nativeEvent)
    }
    return ( 
      <div className="container-input">
          
        <input type="text"  onKeyDown={vocales}/> <br />
        <input type="text" />
        {children}
      </div>
  )
  }
  export default InputApp 