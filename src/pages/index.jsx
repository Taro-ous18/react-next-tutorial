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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box sx={{ overflow: "scroll", position: "sticky", top: 0, zIndex: -1}}>
          <Typography
            sx={{
              position: "absolute",
              top: { xs: "-4rem", sm: "-3rem", md: "-2rem" },
              left: { xs: "-2rem", sm: "-2rem", md: "-1rem" },
              zIndex: 10,
              color: "white",
              fontSize: { xs: "1.3rem", sm: "2rem", md: "3rem" },
              fontWeight: 600,
              textShadow: "-1px 1px black",
              maxWidth: "1200px",
              padding: "6rem",
            }}
          >
            Born & raised in Matsuyama City
          </Typography>
          <img
            src="/MatsuyamaCastle.png"
            style={{
              width: "100%",
              margin: "0 auto",
              backgroundColor: "red",
              position: "stincky",
              top: 0,
              // backgroundSize: "100%",
              // display: "block",
            }}
          />
      </Box>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default index;
