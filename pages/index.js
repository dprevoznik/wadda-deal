import Head from "next/head";
import Link from "next/link";

export default function App() {
  return (
    <div className="App">
      <h1>Wadda Deal</h1>
      <Link href="/neighborhood/murray-hill">
        <a>Murray Hill</a>
      </Link>
      <Link href="/neighborhood/flatiron">
        <a>Flatiron District</a>
      </Link>
    </div>
  );
}
