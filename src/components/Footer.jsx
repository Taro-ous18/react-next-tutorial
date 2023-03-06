import Link from "next/link";
import { Typography, Box, List } from "@mui/material";

const Footer = () => {
  const ITEMS = [
    {
      img: <i class="fa-brands fa-github"></i>,
      url: "https://github.com/Taro-ous18",
    },
    {
      img: <i class="fa-brands fa-linkedin"></i>,
      url: "https://www.linkedin.com/in/%E5%A4%AA%E9%83%8E-%E5%90%89%E9%87%8E-15b553249/",
    },
    {
      img: <i class="fa-brands fa-facebook"></i>,
      url: "https://facebook.com",
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#272932",
          color: "#fff",
          padding: "3rem 5rem",
        }}
      >
        <Box
          sx={{
           display: "flex",
           justifyContent: {xs: "center", md: "end"},
          }}
          className="footer-sns"
        >
          {ITEMS.map((item) => {
            return (
                <Link style={{padding: "1rem"}} href={item.url}>{item.img}</Link>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export { Footer };
