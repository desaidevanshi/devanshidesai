import Link from "next/link";
import { useRouter } from "next/router";
import ReactDOM from "react-dom";
import React, { useRef } from "react";
import classNames from "classnames";

const Navbar = () => {
  const { pathname } = useRouter();

  const toggleNavbar = () => {
    const element = document.getElementById("navbar");
    if (ReactDOM.findDOMNode(element).style.display === "flex") {
      ReactDOM.findDOMNode(element).style.display = "none";
    } else {
      ReactDOM.findDOMNode(element).style.display = "flex";
    }
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        const element = document.getElementById("navbar");
        if (ReactDOM.findDOMNode(element).style.display === "flex") {
          ReactDOM.findDOMNode(element).style.display = "none";
        }
      }
    });

    const toggle = document.getElementById("toggle");
    toggle.classList.toggle("active");
  };
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="max-width">
              <Link href="/">
                <a className="logo">
                  Devan<span>shi.</span>
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
                      className={classNames("nav-link-white", {
                        active: pathname === "#home",
                      })}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="http://localhost:3000/#about">
                    <a
                      className={classNames("nav-link-white", {
                        active: pathname === "#about",
                      })}
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="http://localhost:3000/#services">
                    <a
                      className={classNames("nav-link-white", {
                        active: pathname === "#services",
                      })}
                    >
                      Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="http://localhost:3000/#work">
                    <a
                      className={classNames("nav-link-white", {
                        active: pathname === "#work",
                      })}
                    >
                      Work
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="http://localhost:3000/#contact">
                    <a
                      className={classNames("nav-link-white", {
                        active: pathname === "#contact",
                      })}
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
