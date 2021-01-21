import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as MenuIcon } from "./images/icon-hamburger.svg";

export default function Header() {
  //// Monitor scrollY activity
  const [scrolled, setScrolled] = useState(false);

  const checkScrollY = () => {
    if (window.scrollY >= 100) {
      setScrolled(true);
    }
    if (window.scrollY < 100) {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollY);
  }, []);

  //// Get navbar and list DOM
  const navbarRef = useRef(null);
  const navbarListRef = useRef(null);

  //// Toggle navbar
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const navbarListHeight = navbarListRef.current.getBoundingClientRect().height;
    if (showNavbar) {
      navbarRef.current.style.height = `${navbarListHeight}px`
    } else {
      navbarRef.current.style.height = "0px";
    }
  }, [showNavbar])

  return (
    <header
      className={scrolled ? "main-header main-header--scrolled" : "main-header"}
    >
      <button
        className="menu-button"
        onClick={() => setShowNavbar(!showNavbar)}
      >
        <MenuIcon />
      </button>
      <a className="logo" href={"/"}>
        room
      </a>
      <nav className="navbar" ref={navbarRef}>
        <ul className="navbar__list" ref={navbarListRef}>
          <li className="navbar__item">
            <a className="navbar__link" href="/">
              home
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="/">
              shop
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="/">
              about
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="/">
              contact
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={
          showNavbar
            ? "navbar-modal navbar-modal--active"
            : "navbar-modal"
        }
        onClick={() => setShowNavbar(!showNavbar)}
      />
    </header>
  );
}
