import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente.js'
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';


function App() {
  let array = ["Primavera","Verano","Otoño","Invierno"];
  let rodrigus = "Rodrigus dolfus";
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
          Learn React by Juancho
        </a>
        <section>
        {array.map(elemento => <li>{elemento}</li>)}
        <h3>{rodrigus}</h3>
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
        < Estado />
        <RenderizadoCondicional/>
        <RenderizadoElementos/>
      </section>
      </header>
    </div>
    </>
  );
}

export default App;
