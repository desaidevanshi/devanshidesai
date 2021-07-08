/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable arrow-parens */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import classNames from 'classnames';

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
              <Link href="/">
                <a href="/" className="logo">
                  Devan
                  <span>shi.</span>
                </a>
              </Link>
              <button className="nav-btn" id="toggle" onClick={toggleNavbar} />
            </div>
            <div className="sub-container" id="navbar" ref={navRef}>
              <button onClick={toggleNavbar} className="blankSpace" />

              <ul className="menu">
                <li>
                  <Link href="http://localhost:3000/#home">
                    <a
                      href="/"
                      className={classNames('nav-link-white', { active: pathname === '#home' })}>
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="http://localhost:3000/#about">
                    <a
                      href="#about"
                      className={classNames('nav-link-white', {
                        active: pathname === '#about',
                      })}>
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="http://localhost:3000/#services">
                    <a
                      href="#services"
                      className={classNames('nav-link-white', {
                        active: pathname === '#services',
                      })}>
                      Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="http://localhost:3000/#work">
                    <a
                      href="#work"
                      className={classNames('nav-link-white', {
                        active: pathname === '#work',
                      })}>
                      Work
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="http://localhost:3000/#contact">
                    <a
                      href="#contact"
                      className={classNames('nav-link-white', {
                        active: pathname === '#contact',
                      })}>
                      Contact
                    </a>
                  </Link>
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
