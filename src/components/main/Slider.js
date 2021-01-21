import React from "react";
import mobileFurniture1 from "../images/mobile-image-hero-1.jpg";
import { ReactComponent as ArrowIcon } from "../images/icon-arrow.svg";
import { ReactComponent as RightIcon } from "../images/icon-angle-right.svg";
import { ReactComponent as LeftIcon } from "../images/icon-angle-left.svg";

export default function Slider() {
  return (
    <section className="slider">
      <div className="slider__image-wrapper">
        <img className="slider__image" src={mobileFurniture1} alt="" />
        <div className="slider__button-wrapper">
          <button type="button" className="slider__button">
            <LeftIcon className="slider__icon" />
          </button>
          <button type="button" className="slider__button">
            <RightIcon className="slider__icon" />
          </button>
        </div>
      </div>
      <div className="slider__info-wrapper">
        <h2 className="slider__title">Discover innovative ways to decorate</h2>
        <p className="slider__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          similique porro obcaecati mollitia? Vitae voluptatem est amet eligendi
          rem aut, laudantium eaque soluta repellat, corrupti alias quaerat
          consectetur praesentium perferendis ipsam consequuntur debitis
          inventore ab similique. Voluptates perspiciatis sunt cum?
        </p>
        <a href="/" className="slider__shop-link">
          SHOP NOW
          <ArrowIcon className="slider__shop-icon" />
        </a>
      </div>
    </section>
  );
}
