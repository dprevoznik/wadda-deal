import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function App() {
  return (
    <Layout home>
      <div className="home">
        <Link href="/[neighborhood]" as="/murray-hill">
          <button className="button-link murray">Murray Hill</button>
        </Link>
        <Link href="/[neighborhood]" as="/flatiron">
          <button className="button-link flatiron">Flatiron District</button>
        </Link>
      </div>
    </Layout>
  );
}
