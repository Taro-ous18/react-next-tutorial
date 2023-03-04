import Head from "next/head";
import Link from "next/link";

const contact = () => {
  return (
    <>
      <Head>
        <title>contact</title>
      </Head>
      <h1>contactpage</h1>
      <Link
        href="/"
        style={{
          textDecoration: "none",
          backgroundColor: "red",          fontWeight: "bold",
        }}
      >
        初期画面
      </Link>
    </>
  );
};

export default contact;
