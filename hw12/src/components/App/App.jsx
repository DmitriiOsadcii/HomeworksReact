import { useState } from 'react'

import ValueDisplay from '../ValueDisplay/ValueDisplay'
import './App.css'

function App() {
  const [state, setState] = useState('');
  const handleChange = (event) => {
    setState(event.target.value)
  }
  return (
    <>
      <h1>Current and Previous Values</h1>
      <input onChange={handleChange} type="text" />
      <ValueDisplay value={state} />
    </>
  )
}

export default App
