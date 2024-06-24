import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Header/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App