import React, { useEffect, useRef } from "react";
import "./AboutUs.css";
import images from "../../constants/images";
import {motion, useScroll, useTransform, useInView, useAnimation} from "framer-motion"
const AboutUs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();


  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const about = useTransform(
    scrollYProgress,
    [0,1],
    ["-100", "0%"]
  )

  const history = useTransform(
    scrollYProgress,
    [0,1],
    ["100", "0%"]
  )

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section className="app-about" id="about" ref = {containerRef}>
      <div className="about-overlay">
        <img src={images.nobglogo} alt="" />
      </div>
      <section className="about-content"  >
        <motion.div className="about-us" style={{translateX:about}}>
          <h1>About Us</h1>
          <img src={images.spoon} alt="spoon" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            earum! Ipsam amet inventore, nihil quas voluptatem repellat at fuga
            excepturi quod blanditiis dolores similique error commodi voluptates
            facilis Lorem ipsum dolor sit.
          </p>
          <button className="custom__button">Know more</button>
        </motion.div>
        <div className="knife">
          <img src={images.knife} alt="" />
        </div>
        <motion.div className="history" style={{translateX:history}}>
          <h1>Our History</h1>
          <img src={images.spoon} alt="spoon" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            tenetur voluptate soluta, suscipit quos laborum alias asperiores
            odit quisquam laboriosam odio. Vel, libero. Accusantium possimus,
            alias nemo excepturi Lorem ipsum dolor sit.
          </p>
          <button className="custom__button">Know more</button>
        </motion.div>
      </section>
    </section>
  );
};

export default AboutUs;
