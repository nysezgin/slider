import React from 'react'
import aboutImgLight from "../images/image-about-light.jpg"
import aboutImgDark from "../images/image-about-dark.jpg"


export default function About() {
    return (
      <section className="about">
        <img className="about__image" src={aboutImgDark} alt="" />
        <div className="about__info-wrapper">
          <h3 className="about__title">ABOUT OUR FURNITURE</h3>
          <p className="about__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            recusandae necessitatibus laboriosam laudantium inventore corporis,
            architecto ut debitis deserunt soluta.
          </p>
        </div>
        <img className="about__image" src={aboutImgLight} alt="" />
      </section>
    );
}
