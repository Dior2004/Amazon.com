import React from "react";
import "./Carousel.css";
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import sliderImages from "./BackgroundImages";

const Carousel = () => {
  let [counter, setCounter] = useState(1);
  const [imgTotal] = useState(sliderImages.length);
  const [transition, setTransition] = useState("with");

  useEffect(() => {
    let autoSlider = setInterval(() => {
      setCounter(counter + 1);
    }, 8000);
    return () => {
      clearInterval(autoSlider);
    };
  }, [counter]);

  return (
    <div>
      <div className="carousel_container">
        <div
          onTransitionEnd={() => {
            if (counter <= 0) {
              setTransition("without");
              setCounter(imgTotal);
            } else if (counter >= imgTotal + 1) {
              setTransition("without");
              setCounter(1);
            } else {
              setTransition("with");
            }
          }}
          className={"carousel_slide " + transition}
          style={{
            transform: `translateX(${-counter * 100}%)`,
          }}
        >
          <img
            id="lastClone"
            src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg"
            alt=""
          />
          {sliderImages.map((i, index) => {
            return <img key={index} src={i} alt="" />;
          })}
          <img
            id="firstClone"
            src="https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg"
            alt=""
          />
        </div>
        <button
          className="last"
          onClick={() => {
            if (counter <= 0) return;
            setCounter((counter -= 1));
          }}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="next"
          onClick={() => {
            if (counter >= imgTotal + 1) return;
            setCounter((counter += 1));
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
