import React, { useEffect, useState } from "react";

interface Props {
  images?: any;
  isAutoPlay?: boolean;
  interval?: number;
}
const ImageSlider = ({ images, isAutoPlay = false, interval = 300 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(!isAutoPlay);
  const [count, setCount] = useState(0)
  useEffect(() => {
    let timer: NodeJS.Timer;
    if (!isPaused) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);
    }
    return () => clearInterval(timer);
  }, [isPaused, images.length, interval]);
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((preIndex) =>
      preIndex === images.length - 1 ? 0 : preIndex + 1
    );
  };
  const togglePause = () => {
    setIsPaused((prevIsPasued) => !prevIsPasued);
  };

  const logic = () => {
    let products = [132, 45, 65, 765, 345, 243, 75, 67];
    let totalWeight = 0;

    while (products.length > 0) {
      const minWeight = Math.min(...products);
      totalWeight += minWeight;

      const minWeightIndex = products.indexOf(minWeight);
      const adjacentWeights: number[] = [];
      adjacentWeights.push(minWeight);

      if (minWeightIndex > 0) {
        adjacentWeights.push(products[minWeightIndex - 1]);
      }

      if (minWeightIndex < products.length - 1) {
        adjacentWeights.push(products[minWeightIndex + 1]);
      }

      products = products.filter(item => !adjacentWeights.includes(item));
    }
    console.log(totalWeight);
    return totalWeight;
  };

  return (
    <div className="image-slider">
      <div className="slider-content">
        <img src={images[currentIndex]} alt="Slider" />
      </div>
      <div className="slider-control">
        <button onClick={handlePrevClick} disabled={currentIndex === 0}>
          Prev
        </button>
        <button onClick={togglePause}>{isPaused ? "Play" : "Pause"}</button>
        <button
          onClick={handleNextClick}
          disabled={currentIndex === images.length - 1}
        >
          Next
        </button>
        <button onClick={logic}>logic</button>
      </div>
    </div>
  );
};
export default ImageSlider;
