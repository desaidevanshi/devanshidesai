/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable arrow-parens */
import { useRouter } from 'next/router';
import React, { useRef } from 'react';

const Navbar = () => {
  const { pathname } = useRouter();
  const navRef = useRef();
  const toggleNavbar = () => {
    if (navRef.current.style.display === 'flex') {
      navRef.current.style.display = 'none';
    } else {
      navRef.current.style.display = 'flex';
    }
    window.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        if (navRef.current.style.display === 'flex') {
          navRef.current.style.display = 'none';
        }
      }
    });

    const toggle = document.getElementById('toggle');
    toggle.classList.toggle('active');
  };
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="max-width">
              <a href="/" className="logo">
                Devan
                <span>shi.</span>
              </a>

              <button className="nav-btn" id="toggle" onClick={toggleNavbar} />
            </div>
            <div className="sub-container" id="navbar" ref={navRef}>
              <button onClick={toggleNavbar} className="blankSpace" />

              <ul className="menu">
                <li>
                  <a href="/#home" className={pathname === '/#home' ? 'active' : undefined}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#about" className={pathname === '/#about' ? 'active' : undefined}>
                    About
                  </a>
                </li>
                <li>
                  <a href="/#services" className={pathname === '/#services' ? 'active' : undefined}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="/#work" className={pathname === '/#work' ? 'active' : undefined}>
                    Work
                  </a>
                </li>
                <li>
                  <a href="/#contact" className={pathname === '/#contact' ? 'active' : undefined}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
