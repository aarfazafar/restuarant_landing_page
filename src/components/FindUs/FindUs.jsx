import React from "react";
import "./FindUs.css";
import images from "../../constants/images";
import jjlogo from "../../../public/jjlogo.svg";
import { Phone } from "lucide-react";
const FindUs = () => {
  return (
    <div className="app-findus">
      <div className="findus-container">
        <div className="left">
          <div>
            <h1>Find Us</h1>
            <p>
              155/H/18 Kesab Chandra Sen Street
              <br />
              Beside Jama Masjid, Raja Bazar
              <br />
              Kolkata 7000 09
            </p>
            <h2>For Online Deliveries</h2>
            <ul>
              <li>- Zomato</li>
              <li>- Swiggy</li>
              <li>- Blinkit</li>
            </ul>
          </div>
          <div className="find-contact">
            <div className="contact-box">
              <Phone size={25} />
            </div>
            <div className="contact-no">+91 6207135511</div>
          </div>
        </div>
        <div className="middle">
          <img src={images.findus} alt="" />
        </div>
        <div className="right">
          <div style={{minWidth:"70%"}}>
            <h1>Opening Hours</h1>
            <div className="business-hours">
              <div className="hours-row">
                <span className="day">MON - FRI</span>
                <span className="time">8:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="day">SATURDAY</span>
                <span className="time">9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
