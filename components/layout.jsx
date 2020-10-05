import Link from "next/link";
import { useState, useEffect } from "react";

export default function Layout({ children, home, submit, random, dealsPage }) {
  const [nav, showNav] = useState(false);
  const [fontLarge, showFontLarge] = useState(true);

  function handleScroll() {
    let title = document.querySelector("#title");
    if (document.documentElement.scrollTop > 100 && fontLarge) {
      title.classList.add("title-small");
      showFontLarge(false);
    } else if (document.documentElement.scrollTop === 0 && !fontLarge) {
      title.classList.remove("title-small");
      showFontLarge(true);
    }
  }
  function handleNavbarClick(e) {
    // Deals Page Relevant
    if (dealsPage) {
      let dealsFixed = document.querySelector(".deals-fixed");
      // If clicked and nav is enlarged, remove class that decreases z-index
      if (nav) dealsFixed.classList.remove("deals-fixed-back");
      // If clicked and nav is hidden, add class that decreases z-index
      else dealsFixed.classList.add("deals-fixed-back");
    }
    showNav(!nav);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="layout">
      <div className="layout-title-outer">
        <div className="layout-title">
          <div className="layout-title-header">
            <Link href="/">
              <h1 id="title" className="title">
                Wadda Deal
              </h1>
            </Link>
            <button
              id="hamburger"
              className={nav ? "layout-title-header-clicked" : undefined}
              onClick={handleNavbarClick}
            >
              ☰
            </button>
          </div>
          <div className={`layout-nav ${nav && "layout-nav-open"}`}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/deals">
              <a>Deals</a>
            </Link>
            {home && (
              <Link href={`/${random.neighborhood_param}/${random._id}`}>
                <a>Random</a>
              </Link>
            )}
            <Link href="/submit">
              <a>New</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="https://www.instagram.com/waddadeal/">
              <a>
                <img
                  width="40"
                  height="40"
                  src="https://www.flaticon.com/svg/static/icons/svg/174/174855.svg"
                ></img>
              </a>
            </Link>
          </div>
        </div>
      </div>
      {children}
      {!submit && (
        <Link href="/submit">
          <button className="layout-submit">New</button>
        </Link>
      )}
    </div>
  );
}
