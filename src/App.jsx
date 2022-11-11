function Formulario() {
  function ligaClick() {
    console.log('cliquei no botao')
  }

  function pegaInput(event) {
    console.log(event)
  }

  return (
    <div>
      <input onChange={pegaInput} placeholder="Digite seu nome" />
      <button onClick={ligaClick}>Enviar</button>
    </div> 
  )
}

export default Formulario

//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'

//function App() {
//  const [count, setCount] = useState(0)
  
//  return (
//    <h1> Olá mundo =] </h1>
//  )
//}

//export default App
