/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable arrow-parens */
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';

const Navbar = () => {
  const { pathname } = useRouter();
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

              <button className="nav-btn" id="toggle" ref={toggleRef} onClick={toggleNavbar} />
            </div>
            <div className="sub-container" id="navbar" ref={navRef}>
              <ul className="menu" ref={ulRef}>
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
