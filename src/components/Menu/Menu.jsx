import React from 'react'
import './menu.css'
import images from '../../constants/images'
import MenuCarousal from '../MenuCarousal/MenuCarousal'
import foodData from '../../constants/data' 
const Menu = () => {
  return (
    <div className='app-menu' id = 'menu'>
      <div className="menu-container">
        <div className="heading">
          <img src={images.lArrow} alt="" className="arrows" style={{marginTop: '0.5rem'}}/>
          <div className="menu-title">Menu</div>
          <img src={images.rArrow} alt="" className="arrows" />
        </div>
        <div className="food-container">
          <MenuCarousal data = {foodData}/>
        </div>
      </div>
      
    </div>
  )
}

export default Menu
