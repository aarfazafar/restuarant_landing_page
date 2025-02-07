import React from 'react'
import './chef.css'
import images from '../../constants/images'
const Chef = () => {
  return (
    <div className='app-chefs-word'>
      <div className="main-container">
        <div className="chef-image">
          <img src={images.chef} alt="" />
        </div>
        <div className="chefs-word">
        <p style={{fontFamily: 'var(--font-base)', color: 'grey', fontSize: '1.5rem'}}>Chef's Word</p>
          <h1 className="chef-head">What We Believe In ?</h1>
          <p className='word'> <img src={images.quote} alt="" />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, illum reprehenderit veritatis facilis facere tenetur nisi minus tempore. Natus alias optio rerum! Ipsam illum iure quidem itaque eligendi magnam fugit?</p>

          
          <p style={{fontFamily: 'var(--font-base)', color: 'grey'}}>Chef & Founder</p>
        </div>
      </div>
    </div>
  )
}

export default Chef
