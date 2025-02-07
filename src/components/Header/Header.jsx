import React from 'react'
import images from '../../constants/images'
import './Header.css'
const Header = () => {
  return (
    <div className='app-header' id = 'home'>

      <div className="header-info">
        <div className="sub-heading">
        Jalebi – A Sweet Legacy
        <img src={images.spoon} alt="" />
        </div>
        <h1 className = "headline">The Key to Sweet Bliss</h1>
        <p className='heading-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, non repudiandae saepe voluptatibus, voluptatem enim ab labore mollitia doloremque architecto, voluptas pariatur! At, laborum dolorem ea tempore nihil aliquam</p>
      </div>
      <div className="header-img">
        <img src={images.headImg} alt="" />
      </div>
    </div>
  )
}

export default Header
