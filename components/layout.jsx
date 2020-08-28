import Link from "next/link";
export default function Layout({ children, home }) {
  return (
    <div className="layout">
      <div className="layout-title">
        <h1>Wadda Deal</h1>
      </div>
      {children}
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
