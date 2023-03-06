import { Certification } from "./Certification";
import { Introduction } from "./Introduction";
import { ThingsOfInterst } from "./ThingsOfInterst";
import { Typography, Box } from "@mui/material";


const Content = () => {
  return (
    <Box style={{ backgroundColor: "white", width: "100%", margin: "0 auto"}}>
      <Box>
        <Introduction/>
        <Certification/>
        <ThingsOfInterst/>
      </Box>
    </Box>
  );
};

export { Content };
