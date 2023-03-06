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
        <section>
          <Typography
            sx={{
              position: "absolute",
              top: { xs: "1rem", sm: "2rem", md: "3rem" },
              left: { xs: "0.2rem", sm: "0.5rem", md: "3rem" },
              zIndex: 10,
              marginLeft: { xs: "2rem", sm: "3rem", md: "5rem" },
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
              // position: "stincky",
              // top: 0,
              // backgroundSize: "100%",
              // display: "block",
            }}
          />
        </section>
      </Box>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default index;
