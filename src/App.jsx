import React  from 'react'
import './App.css'

// import {NavBar, Header, Footer, AboutUs} from './components/'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import AboutUs from './components/AboutUs/AboutUs'
import Chef from './components/Chef/Chef'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import Gallery1 from './components/Gallery/Gallery1'
import FindUs from './components/FindUs/FindUs'
function App() {

  return (
    <>
      <NavBar/>
      <Header/>
      <Menu/>
      <AboutUs/>
      <Chef/>
      <Gallery1/>
      <FindUs/>
      <Footer/>
    </>
  )
}

export default App
