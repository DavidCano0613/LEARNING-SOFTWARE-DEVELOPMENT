import React from "react";
import PropTypes from 'prop-types';

export default function Propiedades(props) {
    return (
        <div>
            <h2> Propiedades - {props.byDefault}</h2>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano ? "true" : "Falso"}</li>
            <li>{props.array}</li>
            <li>{`${props.objeto.nombre} ${props.objeto.edad} ${props.objeto.hobbies}`}</li>
            <li>{props.elementoReact}</li>
            <li>{props.array.map(props.funcion).join(', ')}</li>
            <li>{props.componenteReact}</li>
        </div>
    )
}

Propiedades.defaultProps = {
    byDefault: "The props"
}

//*Propiedades con caracteristicas especificas, si se necesita que una propiedad si o si reciba una propiedad propTyps permite establecer estas restricciones. 

Propiedades.propTypes = {
    numero: PropTypes.number.isRequired,
}