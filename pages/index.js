import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function App() {
  return (
    <Layout home>
      <div className="home">
        <button className="button-link">
          <Link href="/neighborhood/murray-hill">
            <a>Murray Hill</a>
          </Link>
        </button>
        <button className="button-link">
          <Link href="/neighborhood/flatiron">
            <a>Flatiron District</a>
          </Link>
        </button>
      </div>
    </Layout>
  );
}
