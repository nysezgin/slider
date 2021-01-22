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
            Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </div>
        <img className="about__image" src={aboutImgLight} alt="" />
      </section>
    );
}
