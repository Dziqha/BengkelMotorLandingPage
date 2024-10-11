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

  const handleMenuClick = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor click behavior
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the target section
    }
  };

  return (
    <>
      {/* Header start */}
      <header
        className={`bg-transparent absolute top-0 left-0 w-full items-center z-10 flex ${
          isNavbarFixed ? "navbar-fixed" : ""
        } ${checkboxRef.current?.checked ? "bg-blur" : ""}`}
      >
        <div className="container">
          <div className="flex items-center relative">
            <div className="flex items-center">
              <span className="ml-5 text-slate-700 dark:text-gray-100">
                {/* Your logo or icon here */}
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
                      onClick={(e) => handleMenuClick(e, "home")}
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-dark flex py-2 mx-8 group-hover:text-primary dark:text-white"
                      onClick={(e) => handleMenuClick(e, "about")}
                    >
                      Tentang Kami
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="text-base text-dark flex py-2 mx-8 group-hover:text-primary dark:text-white"
                      onClick={(e) => handleMenuClick(e, "portfolio")}
                    >
                      Layanan Kami
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#clients"
                      className="text-base text-dark flex py-2 mx-8 group-hover:text-primary dark:text-white"
                      onClick={(e) => handleMenuClick(e, "clients")}
                    >
                      Mitra Kami
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base text-dark flex py-2 mx-8 group-hover:text-primary dark:text-white"
                      onClick={(e) => handleMenuClick(e, "contact")}
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
