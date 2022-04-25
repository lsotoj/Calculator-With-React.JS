import React from "react";
import '../hojas-de-estilo/Boton.css';

const esOperador = (signo) => {
  if(signo === '-' || signo === '+' || signo === '*' || signo === '/') return true;
  return false;
}


const Boton = (props) =>  (
  <div 
    className={`boton ${ esOperador(props.children) ? 'boton-operador': '' }`}
    onClick={ () => props.manejarClic(props.children) }>
    {props.children}
  </div>
);

export default Boton;
