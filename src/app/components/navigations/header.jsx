"use client";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function HeaderPage() {
  const checkboxRef = useRef(null);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false); // State for fixed navbar

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("header");
      const fixedNav = navbar.offsetTop;

      if (window.pageYOffset > fixedNav) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDarkModeToggle = () => {
    const checkbox = checkboxRef.current;
    const html = document.querySelector("html");

    if (checkbox.checked) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleHamburgerClick = () => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };

  const handleClickOutside = (e) => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");
    }
  };

  useEffect(() => {
    const checkbox = checkboxRef.current;
    const html = document.querySelector("html");

    // Set initial state based on local storage or system preference
    if (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      checkbox.checked = true;
      html.classList.add("dark");
    } else {
      checkbox.checked = false;
      html.classList.remove("dark");
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Header start */}
      <header
        className={`bg-transparent  absolute top-0 left-0 w-full items-center z-10 flex ${
          isNavbarFixed ? "navbar-fixed" : ""
        } ${checkboxRef.current?.checked ? "bg-blur" : ""}`}
      >
        <div className="container">
          <div className="flex items-center  relative">
            <div className="flex items-center">
              <span className="ml-5 text-slate-700 dark:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi w-12 h-12 mt-2 sm:w-10 sm:h-10 lg:w-10 lg:h-10  bi-gear-wide mb-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c.719.695.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                </svg>
              </span>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
                onClick={handleHamburgerClick}
              >
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out" />
                <span className="hamburger-line transition duration-300 ease-in-out" />
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out" />
              </button>
              <nav
                className={`hidden dark:bg-dark lg:dark:bg-transparent dark:shadow-slate-500 absolute bg-white py-5 shadow-lg rounded-lg max-w-[250px] w-full top-full right-4 lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${
                  isNavbarFixed ? "lg:dark:bg-dark" : ""
                }`}
                id="nav-menu"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-dark flex py-2 mx-8 group-hover:text-primary dark:text-white"
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-dark flex py-2 mx-8 group-hover:text-primary dark:text-white"
                    >
                      Tentang Kami
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="text-base text-dark flex py-2 mx-8 group-hover:text-primary dark:text-white"
                    >
                      Layanan Kami
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#clients"
                      className="text-base text-dark flex py-2 mx-8 group-hover:text-primary dark:text-white"
                    >
                      Mitra Kami
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base text-dark flex py-2 mx-8 group-hover:text-primary dark:text-white"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="flex mt-3 lg:mt-0 pl-8 items-center ">
                    <div className="flex">
                      <span className="mr-2 text-slate-700 dark:text-gray-100">
                        <FontAwesomeIcon icon={faSun} />
                      </span>
                      <input
                        type="checkbox"
                        className="hidden"
                        id="dark-toggle"
                        ref={checkboxRef}
                        onClick={handleDarkModeToggle}
                      />
                      <label htmlFor="dark-toggle">
                        <div className="flex h-5 w-9 items-center bg-slate-500 rounded-full p-1">
                          <div className="toggle-circle h-4 w-4 bg-white rounded-full transition duration-300 ease-in-out" />
                        </div>
                      </label>
                      <span className="ml-2 text-slate-700 dark:text-gray-100">
                        <FontAwesomeIcon icon={faMoon} />
                      </span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header end */}
    </>
  );
}
