import Link from "next/link";
import { Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          margin: "0 auto",
          backgroundColor: "#272932",
          height: "4rem",
          position: "sticky",
          top: "0",
          padding: {xs: "1rem", sm :"2.5rem"},
        }}
      >
        <Link href="/" className="header-name">
          <Typography sx={{ fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>Taro Yoshino</Typography>
        </Link>
        <Box sx={{ fontSize: {xs: "0.5rem", sm: "1rem", md: "10rem" }, display: "flex"}}>
          <Link href="/about" className="link about">
            <Typography sx={{ fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>about</Typography>
          </Link>
          <Link href="/projects" className="link projects">
            <Typography sx={{ fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>projects</Typography>
          </Link>
          <Link href="/sns" className="link sns">
            <Typography sx={{ fontSize: {xs: "1rem", sm: "1.5rem", md: "2rem"}}}>sns</Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export { Header };
