import { Content } from "@/components/Content";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";
import { Typography, Box } from "@mui/material";


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
      <Box>
        <Typography
          sx={{
            position: "absolute",
            top: "3rem",
            left: {xs: "0.2rem", sm: "0.5rem", md: "0.5rem"},
            zIndex: 10,
            marginLeft: {xs: "2rem", sm: "3rem", md: "5rem"},
            color: "white",
            fontSize: {xs: "1.3rem", sm: "1.7rem", md: "2.3rem"},
            fontWeight: 600,
            textShadow: "-1px 1px black"
          }}
        >
          Born & raised in Matsuyama City
        </Typography>
        <img
          src="/MatsuyamaCastle.png"
          style={{ width: "100%", margin: "0 auto", backgroundColor: "red" }}
        />
      </Box>
      <Header />
      <Content />
      <Footer/>
    </div>
  );
};

export default index;
