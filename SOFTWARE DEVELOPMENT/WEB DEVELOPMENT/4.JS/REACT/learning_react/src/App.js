import React from 'react';
import logo from './logo.svg';
import './App.css';

import Componente from './components/Componente.js';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6,EventosES7 } from './components/Eventos';


function App() {
  let array = ["Primavera","Verano","Otoño","Invierno"];
  return (
    <>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React by Juan David Paniagua Cano
        </a>

        {/* By Me */}
        <hr/>
        <section>
        {array.map(elemento => <li>{elemento}</li>)}
        <Componente msg="Hola soy un componente desde una prop"/>
        <Propiedades 
        cadena="String"
        numero={21} 
        booleano={true} 
        array={[2,4,9]} 
        objeto={{nombre:"Juancho",edad:22,hobbies:["read","fuck","eat"]}}
        elementoReact={<i>Esto es un elemento de react</i>}
        funcion={num => num*num}
        componenteReact = {<Componente msg="Hola soy un componente pasado como prop"/>}
        />
        <hr/>
        <Estado/>
        <RenderizadoCondicional/>
        <RenderizadoElementos/>
        <EventosES6></EventosES6>
        <EventosES7></EventosES7>
      </section>
      </header>
    </div>
    </>
  );
}

export default App;
