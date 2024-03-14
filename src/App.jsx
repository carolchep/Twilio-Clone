import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Structure from './components/Structure'
import ThirdPart from './components/ThirdPart'
import FourthPart from './components/FourthPart'

function App() {

  return (
    <div className="font-raleway text-textg font-medium leading-6 font-sans text-base leading-relaxed">
      <Header />
      <Structure />
      <ThirdPart />
      <FourthPart />
      </div>
  )
}

export default App
