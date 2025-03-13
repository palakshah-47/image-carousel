import { useState } from "react";

const ImageCarousel = ({
  images,
}: Readonly<{ images: ReadonlyArray<{ src: string; alt: string }> }>) => {
  const [currIndex, setCurrIndex] = useState(0);
  const currImage = images[currIndex];

  return (
    <>
      <div className="image-carousel">
        <img
          src={currImage.src}
          alt={currImage.alt}
          key={currImage.src}
          className="image-carousel-img"
        />
        <button
          className="image-carousel__button image-carousel-button__left"
          onClick={() => {
            const nextIndex = (currIndex - 1 + images.length) % images.length;
            console.log(currIndex);
            console.log(nextIndex);
            setCurrIndex(nextIndex);
          }}
        >
          &#10094;
        </button>

        <button
          className="image-carousel__button image-carousel-button__right"
          onClick={() => {
            const nextIndex = (currIndex + 1) % images.length;
            setCurrIndex(nextIndex);
          }}
        >
          &#10095;
        </button>
      </div>
      <div className="image-carousel__button__div">
        {images.map(({ alt, src }, index) => (
          <button
            className={`image-carousel__pages ${
              currIndex === index ? "image-carousel__pages__active" : ""
            }`}
            aria-label={`navigae to ${alt}`}
            key={src}
            onClick={() => setCurrIndex(index)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default ImageCarousel;
