import React  from 'react'
import './App.css'

// import {NavBar, Header, Footer, AboutUs} from './components/'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import AboutUs from './components/AboutUs/AboutUs'
import Chef from './components/Chef/Chef'
import Menu from './components/Menu/Menu'
function App() {

  return (
    <>
      <NavBar/>
      <Header/>
      <Menu/>
      <AboutUs/>
      <Chef/>
      {/* <Footer/> */}

    </>
  )
}

export default App
