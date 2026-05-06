import React from 'react'
import HeroSection from './components/HeroSection'
import CognitiveBiases from './components/CognitiveBiases'
import Methodology from './components/Methodology'
import ResumeAndNetworking from './components/ResumeAndNetworking'
import './index.css'

function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <CognitiveBiases />
      <Methodology />
      <ResumeAndNetworking />
    </div>
  )
}

export default App
