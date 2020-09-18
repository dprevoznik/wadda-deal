import Link from "next/link";
import { useState } from "react";

export default function Layout({ children, home, submit, random }) {
  let [nav, showNav] = useState(false);
  return (
    <div className="layout">
      <div className="layout-title-outer">
        <div className="layout-title">
          <div className="layout-title-header">
            <Link href="/">
              <h1>Wadda Deal</h1>
            </Link>
            <button
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
