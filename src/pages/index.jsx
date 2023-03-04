import { Content } from "@/components/Content";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>プロフィール</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>
      <div>
        <h4
          style={{
            position: "absolute",
            top: "3rem",
            left: "1rem",
            zIndex: 10,
            marginLeft: "10rem",
            color: "white",
            fontSize: "2.3rem",
          }}
        >
          Born & raised in Matsuyama City
        </h4>
        <img
          src="/MatsuyamaCastle.png"
          style={{ width: "83%", margin: "0 auto", backgroundColor: "red" }}
        />
      </div>
      <Header />
      <Content />
      <Footer/>
    </div>
  );
};

export default index;
