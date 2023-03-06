import { Header } from "@/components/Header";
import Head from "next/head";
import { Typography, Box } from "@mui/material";

const projects = () => {
  return (
    <>
      <Head>
        <title>projects</title>
      </Head>
      <Header />
      <Box sx={{ backgroundColor: "#fff", height: "95vh" }}>
        <h3>準備中</h3>
      </Box>
    </>
  );
};

export default projects;
