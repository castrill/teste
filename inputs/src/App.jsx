import React from "react"
import { useState } from "react"
import './App.css'

function App(){

  const[inputN1, setInputN1] = useState('')
  const[inputN2, setInputN2] = useState('')
  const[resultado, setResultado] = useState('')

  function somar() {
    setResultado(Number(inputN1) + Number(inputN2))
  }
  function subtrair() {
    setResultado(Number(inputN1) - Number(inputN2))
  }
  function dividir() {
    setResultado(Number(inputN1) / Number(inputN2))
  }
  function multiplicar() {
    setResultado(Number(inputN1) * Number(inputN2))
  }

  function tratarN2(event) {
    setInputN2(event.target.value)

  }


  return(
    <>
    <h1>Calculadeira</h1>
    <div className="container-app">
      <input type="number" step="1" value={inputN1} onChange={(event) => setInputN1(event.target.value)} />
    😶‍🌫️
      <input type="text" value={inputN2} onChange={(event) => setInputN2(event.target.value)}/>      
      </div>
  
    <button onClick={somar}>+</button>
    <button onClick={subtrair}>-</button>
    <button onClick={dividir}>/</button>
    <button onClick={multiplicar}>*</button>
    = {resultado}
    </>
    )
  }

export default App