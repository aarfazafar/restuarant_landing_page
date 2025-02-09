import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import imageData from "../../constants/gallery";
import ImageContainer from "./ImageContainer";

const Gallery1 = () => {
  const targetRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Move images fully across the screen
  const totalImages = imageData.length;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${100 * (totalImages / 3)}%`]
  );

  // Toggle fixed positioning dynamically
  useEffect(() => {
    const handleScroll = () => {
      const rect = targetRef.current?.getBoundingClientRect();
      setIsFixed(rect?.top <= 0 && rect?.bottom >= window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <h1 className="gallery-heading">Photo Gallery</h1>
      <div className="gallery-wrapper" ref={targetRef}>
        <div className={`gallery-container ${isFixed ? "fixed" : ""}`}>
          <motion.div
            className="images"
            style={{ x, width: `calc(27vw * ${totalImages})` }}
          >
            {imageData.map((d, index) => (
              <div key={index} className="imageItem">
                <ImageContainer
                  imageSource={d.url}
                  description={d.description}
                  key={d.url}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery1;
