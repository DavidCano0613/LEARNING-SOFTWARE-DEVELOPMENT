import React, { Component } from "react";
import data from '../helpers/data.json';

function ElementoLista(props) {
    return (
        <li>
            <a href={props.element.web}>{props.element.nombre}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: ["Primera", "Verano", "Otoño", "Invierno"]
        }
    }
    render() {
        console.log(data)
        return (
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        this.state.seasons.map(element => <li key={element}>{element}</li>)
                    }
                </ol>
                <h3>Framework front-end JavaScript</h3>
                <ul>
                    {data.frameworks
                        .map((element, index) => <ElementoLista key={element.id} element={element}/>)
                    }
                </ul>
            </div>
        )
    }
}
