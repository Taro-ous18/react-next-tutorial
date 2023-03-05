import { Certification } from "./Certification";
import { IntroduceMyself } from "./IntroduceMyself";
import { ThingsOfInterst } from "./ThingsOfInterst";
import { Typography, Box } from "@mui/material";


const Content = () => {
  return (
    <Box style={{ backgroundColor: "white", width: "100%", margin: "0 auto"}}>
      <main>
        <p>こんにちは</p>
        <p>こんにちは</p>
        <p>こんにちは</p>
        <IntroduceMyself/>
        <Certification/>
        <ThingsOfInterst/>
      </main>
    </Box>
  );
};

export { Content };
