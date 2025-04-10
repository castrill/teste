import React from "react"
import { useState } from "react"
import './App.css'

function App(){

  const[inputN1, setInputN1] = useState('')
  const[inputN2, setInputN2] = useState('')

  function tratarN2(event) {
    setInputN2(event.target.value)

  }
  return(
    <>
    <h1>Calculadeira</h1>
    <div>
      <input type="text" value={inputN1} onChange={(event) => setInputN1(event.target.value)} />
      {inputN1}
      <input type="text" value={inputN2} onchange={tratarN2} />
      {inputN2}


    </div>
    </>
  )
}

export default App