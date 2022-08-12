import React,{Component} from "react";

export class EventosES6 extends Component {
    constructor(props){
        super(props)
        this.state = {
            contador:0
        }
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)

    }
    sumar(e){
        console.log("Sumando")
        this.setState({
            contador:this.state.contador + 1
        })
        console.log(this)
    }

    restar(e){
        console.log("Restar")
        this.setState({
            contador:this.state.contador - 1
        })
        console.log(this)
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de clase VS7</h2>
                <nav>
                <button type="" onClick ={this.sumar}>+</button>
                <button type="" onClick ={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
} 

export class EventosES7 extends Component {
    constructor(props){
        super(props)
        this.state = {
            contador:0
        }
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar(e){
        console.log("Sumando")
        this.setState({
            contador:this.state.contador + 1
        })
        console.log(this);
    }

    restar(e){
        console.log("Restar")
        this.setState({
            contador:this.state.contador - 1
        })
        console.log(this);
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de clase VS7</h2>
                <nav>
                <button type="" onClick ={this.sumar}>+</button>
                <button type="" onClick ={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}