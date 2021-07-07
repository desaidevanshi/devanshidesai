/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable arrow-parens */
import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactDOM from 'react-dom';
import React from 'react';
import classNames from 'classnames';

const Navbar = () => {
  const { pathname } = useRouter();

  const toggleNavbar = () => {
    const element = document.getElementById('navbar');
    if (ReactDOM.findDOMNode(element).style.display === 'flex') {
      ReactDOM.findDOMNode(element).style.display = 'none';
    } else {
      ReactDOM.findDOMNode(element).style.display = 'flex';
    }
    window.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        const ele = document.getElementById('navbar');
        if (ReactDOM.findDOMNode(ele).style.display === 'flex') {
          ReactDOM.findDOMNode(ele).style.display = 'none';
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
            <div className="sub-container" id="navbar">
              <button onClick={toggleNavbar} className="blankSpace" />

              <ul className="menu">
                <li>
                  <Link href="http://localhost:3000/#home">
                    <a
                      href="/"
                      // eslint-disable-next-line prettier/prettier
                      className={classNames('nav-link-white', { active: pathname === '#home' })}
                    >
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
                      })}
                      // eslint-disable-next-line prettier/prettier
                    >
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
                      })}
                      // eslint-disable-next-line prettier/prettier
                    >
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
                      })}
                      // eslint-disable-next-line prettier/prettier
                    >
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
                      })}
                      // eslint-disable-next-line prettier/prettier
                    >
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
