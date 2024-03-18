import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Structure from './components/Structure'
import ThirdPart from './components/ThirdPart'
import FourthPart from './components/FourthPart'
import FifthPart from './components/FifthPart'
import Blog from './components/Blog'
import Connect  from './components/Connect'

function App() {

  return (
    <div className="font-raleway text-textg font-medium leading-6 font-sans text-base leading-relaxed">
      <Header />
      <Structure />
      <ThirdPart />
      <FourthPart />
      <FifthPart/>
      <Blog/>
      <Connect/>
      </div>
  )
}

export default App
