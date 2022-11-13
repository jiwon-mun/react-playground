import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './Button'
import Counter from './Counter'
import { useRef } from 'react'

function App() {
  console.log("App")
  const ref = useRef();
  return (
    
    <div className="App">
                <Button setCount={ref} />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <div className="card">
          <Counter ref={ref} />

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
