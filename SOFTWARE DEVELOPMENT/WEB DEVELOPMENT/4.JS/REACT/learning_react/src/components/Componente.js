import React,{ Component } from "react"
 
//*Creación de un componente basado en clases 
//*Una componente de clase debe tener su método render que es lo que permite pintarse en el html 

// class Componente extends Component {
//     render(){
//         return <h2>{this.props.msg}</h2>
//     }
// }

//*Componente funcional 
const Componente = (props) => <h2>{props.msg}</h2>

export default Componente;