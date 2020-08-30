import Link from "next/link";
export default function Layout({ children, home }) {
  return (
    <div className="layout">
      <div className="layout-title-outer">
        <div className="layout-title">
          <h1>Wadda Deal</h1>
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
    </div>
  );
}
