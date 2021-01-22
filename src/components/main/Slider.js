import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowIcon } from "../images/icon-arrow.svg";
import { ReactComponent as RightIcon } from "../images/icon-angle-right.svg";
import { ReactComponent as LeftIcon } from "../images/icon-angle-left.svg";
import sliderData from "./sliderData";

export default function Slider({isMobile}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = sliderData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);
  return (
    <article className="slider">
      {sliderData.map((slide, slideIndex) => {
        const { id, mobileImg, desktopImg, title, info } = slide;

        let position = "slider__slide--next";
        if (slideIndex === index) {
          position = "slider__slide--active";
        }
        if (
          slideIndex === index - 1 ||
          (index === 0 && slideIndex === sliderData.length - 1)
        ) {
          position = "slider__slide--last";
        }

        return (
          <div key={id} className={"slider__slide " + position}>
            <img className="slider__image" src={isMobile ? mobileImg : desktopImg} alt="" />
            <div className="slider__info-wrapper">
              <h2 className="slider__title">{title}</h2>
              <p className="slider__info">{info}</p>
            </div>
          </div>
        );
      })}
      <a href="/" className="slider__shop-link">
        SHOP NOW
        <ArrowIcon className="slider__shop-icon" />
      </a>
      <div className="slider__button-wrapper">
        <button
          type="button"
          className="slider__button"
          onClick={() => setIndex(index - 1)}
        >
          <LeftIcon className="slider__icon" />
        </button>
        <button
          type="button"
          className="slider__button"
          onClick={() => setIndex(index + 1)}
        >
          <RightIcon className="slider__icon" />
        </button>
      </div>
    </article>
  );
}
