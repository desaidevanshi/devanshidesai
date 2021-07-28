/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable arrow-parens */
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const navRef = useRef();
  const ulRef = useRef();
  const navbarRef = useRef();
  const toggleRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 60) {
        navbarRef.current.classList.add('fixed-header');
        ulRef.current.classList.add('nav-transparent');
      } else {
        navbarRef.current.classList.remove('fixed-header');
        ulRef.current.classList.remove('nav-transparent');
      }
    };
    window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);

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
    window.removeEventListener('keydown', event => {
      if (event.key === 'Escape') {
        if (navRef.current.style.display === 'flex') {
          navRef.current.style.display = 'none';
        }
      }
    });
    const toggle = toggleRef.current;
    window.addEventListener('click', e => {
      if (
        e.target !== ulRef &&
        navRef.current.style.display === 'flex' &&
        e.target !== toggleRef.current
      ) {
        navRef.current.style.display = 'none';
        toggle.classList.toggle('active');
      }
    });
    window.removeEventListener('click', e => {
      if (
        e.target !== ulRef &&
        navRef.current.style.display === 'flex' &&
        e.target !== toggleRef.current
      ) {
        navRef.current.style.display = 'none';
        toggle.classList.toggle('active');
      }
    });
    toggle.classList.toggle('active');
  };
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container" ref={navbarRef}>
            <div className="max-width">
              <a href="/" className="logo">
                Devan
                <span>shi.</span>
              </a>

              <button
                aria-label="Navigation"
                className="nav-btn"
                id="toggle"
                ref={toggleRef}
                onClick={toggleNavbar}
              />
            </div>
            <div className="sub-container" id="navbar" ref={navRef}>
              <ul className="menu" ref={ulRef}>
                <li>
                  <Link href="/#home" className="/#home">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="/#about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="/#services">
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#work" className="/#work">
                    <a>Work</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="/#contact">
                    <a>Contact</a>
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
