import { useEffect } from "react";
import { getFetch } from "../helpers/getFetch"

function Promesas() {
    getFetch // llamada a la api
    .then((resp)=>{
        console.table(resp);
    })

    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
    
    return (
        <div>
            Promesas 

        </div>
    )
}
export default Promesas