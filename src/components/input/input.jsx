import TituloApp from "../tituloApp"

const InputApp = ({children})=>{
    // console.log(children);
    return <div>
        <TituloApp titulo ={'titulo input'} subtitulo ='soy subtitulo input'saludo={() => console.log('saludo input')}/>
       <input type="text" /> <br />
       <input type="text" />
       {children}
    </div>
  }
  export default InputApp 