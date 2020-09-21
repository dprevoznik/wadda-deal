import Link from "next/link";
import { useState, useEffect } from "react";

export default function Layout({ children, home, submit, random }) {
  const [nav, showNav] = useState(false);
  function handleScroll() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("title").style.fontSize = "1.75rem";
      document.getElementById("hamburger").style.fontSize = "1.25rem";
    } else {
      document.getElementById("title").style.fontSize = "3rem";
      document.getElementById("hamburger").style.fontSize = "1.5rem";
    }
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
              <h1 id="title">Wadda Deal</h1>
            </Link>
            <button
              id="hamburger"
              className={nav ? "layout-title-header-clicked" : undefined}
              onClick={() => showNav(!nav)}
            >
              ☰
            </button>
          </div>
          <div className={`layout-nav ${nav && "layout-nav-open"}`}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/submit">
              <a>Submit</a>
            </Link>
            {home && (
              <Link href={`/${random.neighborhood_param}/${random._id}`}>
                <a>Random</a>
              </Link>
            )}
          </div>
        </div>
      </div>
      {children}
      {!home && (
        <div className="layout-back">
          <Link href="/">
            <button className="layout-back-button">{"⬅ Home"}</button>
          </Link>
        </div>
      )}
      {!submit && (
        <Link href="/submit">
          <button className="layout-submit">Submit</button>
        </Link>
      )}
    </div>
  );
}
