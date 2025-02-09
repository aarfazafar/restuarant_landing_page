import React, { useRef } from "react";
import "./Gallery.css";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageItem from "./ImageItem";
const Gallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);
  return (
      <div  className="gallery-carousal" ref={targetRef}>
        <div className="contentContainer">
          <motion.div className="images" style={{ x }}>
            <div className='items'>
              <ImageItem
                props={{
                  url: "https://i.pinimg.com/736x/27/31/c3/2731c322b5f204658d2f2e3326e82728.jpg",
                  description: "Malpua Rabdi",
                }}
              />
            </div>
            <div className='items'>
              <ImageItem
                props={{
                  url: "https://i.pinimg.com/736x/7b/5c/a1/7b5ca102f12233f8459e4d1490837b19.jpg",
                  description: "Gajar Halwa",
                }}
              />
            </div>
            <div className='items'>
              <ImageItem
                props={{
                  url: "https://i.pinimg.com/736x/0d/8b/94/0d8b94bb056028ff011846732397e674.jpg",
                  description: "",
                }}
              />
            </div>

            <div className='items'>
              <ImageItem
                props={{
                  url: "https://i.pinimg.com/736x/87/d3/4b/87d34b7bcff6e8d98fc5779308953d29.jpg",
                  description: "Punjabi Samosa",
                }}
              />
            </div>
            <div className='items'>
              <ImageItem
                props={{
                  url: "https://i.pinimg.com/736x/9b/46/66/9b4666981c7a124556d4de5d083dfea6.jpg",
                  description: "Bombay special Vada pao",
                }}
              />
            </div>
            <div className='items'>
              <ImageItem
                props={{
                  url: "https://i.pinimg.com/736x/47/c0/89/47c089e83072618b5c96d150f4ece7f5.jpg",
                  description: "Kaju Katli",
                }}
              />
            </div>
            <div className='items'>
              <ImageItem
                props={{
                  url: "https://i.pinimg.com/736x/94/5e/b2/945eb27e8c47673a4f0021d463c72138.jpg",
                  description: "JJ special Haleem",
                }}
              />
            </div>
            <div className='items'>
              <ImageItem
                props={{
                  url: "https://i.pinimg.com/736x/bf/28/ed/bf28ede9d799db3152594ea2813064dc.jpg",
                  description: "Dudhi halwa",
                }}
              />
            </div>
            <div className='items'>
              <ImageItem
                props={{
                  url: "https://i.pinimg.com/736x/f0/dc/32/f0dc328ace44cb0bf91b1a65154ffc1d.jpg",
                  description: "Papri chat",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default Gallery;
