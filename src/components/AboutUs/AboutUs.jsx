import React from 'react'
import './AboutUs.css'
import images from '../../constants/images'
const AboutUs = () => {
  return (
    <div className='app-about' id = 'about'>
      <div className="about-overlay">
        <img src={images.nobglogo} alt="" />
      </div>
      <div className="about-content">
        <div className="about-us">
            <h1>About Us</h1>
            <img src={images.spoon} alt="spoon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, earum! Ipsam amet inventore, nihil quas voluptatem repellat at fuga excepturi quod blanditiis dolores similique error commodi voluptates facilis Lorem ipsum dolor sit.</p>
            <button className='custom__button'>Know more</button>
        </div>
        <div className="knife">
          <img src={images.knife} alt="" />
        </div>
        <div className="history">
            <h1>Our History</h1>
            <img src={images.spoon} alt="spoon" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam tenetur voluptate soluta, suscipit quos laborum alias asperiores odit quisquam laboriosam odio. Vel, libero. Accusantium possimus, alias nemo excepturi Lorem ipsum dolor sit.</p>
            <button className='custom__button'>Know more</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
