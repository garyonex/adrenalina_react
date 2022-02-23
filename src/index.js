import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// App ()
ReactDOM.render(
  
    <App />,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// function App(){
//     const[count, setCount] = useState(0)
    
//     let condition = false
//     let resultado = ''
//     if(condition){
//         resultado = 'Verdadero'

//     }else{
//         resultado = 'false'
//     }
//     console.log('el resultado' + resultado);
// }

// const condition = true;
// let result = null;
// if(condition){
//     result = 'correct';
// } else{
//     result='incorrect'
// }
// console.log(`this is ${result}`);


// // esto es lo mismo que lo que esta en la parte de arriba
// let condition = false
// console.log(`el resultado es ${condition ? 'verdadero' :'false'}`);
// // condicion ? si : no
// // condicion && si
// // condicion || o esto

// const array = ['b', 'c', 'd']
// let a = 'a'
// const newArray = [ ... array, a]
// console.log(newArray);

// let id = 'Gary'

// const obj={
//   nombre : "pepe",
//   ["id" + id]:42
// }
// console.log(obj);


var obj1={
    nombre:'gary',
    edad:30,
}
// let nombre = obj1.nombre
// let edad = obj1.edad

const {nombre, edad} = obj1

console.log(nombre);
console.log(edad);