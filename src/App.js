import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear'
import Pantalla from './componentes/Pantalla';
import { evaluate } from 'mathjs'


function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  }

  const limpiarPantalla = () => {
    setInput('');
  }

  const calcularResultado = () => {
    if(input) {
      setInput(evaluate(input));
    } else {
      alert('Ingrese un valor a calcular')
    }
  }

  return (
    <div className='App'>
      <h1 className='logo'>Calculadora</h1>
      <div className='contenedor-principal'>
        
        <Pantalla valor={input} />

        <div className='contenedor-botones'>
          <Boton manejarClic={agregarInput} >1</Boton>
          <Boton manejarClic={agregarInput} >2</Boton>
          <Boton manejarClic={agregarInput} >3</Boton>
          <Boton manejarClic={agregarInput} >-</Boton>
        </div>
        <div className='contenedor-botones'>
          <Boton manejarClic={agregarInput} >4</Boton>
          <Boton manejarClic={agregarInput} >5</Boton>
          <Boton manejarClic={agregarInput} >6</Boton>
          <Boton manejarClic={agregarInput} >+</Boton>
        </div>
        <div className='contenedor-botones'>
          <Boton manejarClic={agregarInput} >7</Boton>
          <Boton manejarClic={agregarInput} >8</Boton>
          <Boton manejarClic={agregarInput} >9</Boton>
          <Boton manejarClic={agregarInput} >*</Boton>
        </div>
        <div className='contenedor-botones' >
          <Boton manejarClic={calcularResultado} >=</Boton>
          <Boton manejarClic={agregarInput} >0</Boton>
          <Boton manejarClic={agregarInput} >.</Boton>
          <Boton manejarClic={agregarInput} >/</Boton>
        </div>
        <div className='contenedor-botones'>
        <BotonClear manejarClic={limpiarPantalla}>Clear</BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
