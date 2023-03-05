import { Typography, Box } from "@mui/material";

const ThingsOfInterst = () => {
  return (
    <Box
      style={{
        backgroundColor: "#ffe066",
        padding: "4rem 3rem",
        fontWeight: 600,
        fontSize: "1.2rem",
      }}
    >
      <Typography
        sx={{
          fontSize: {xs: "1.7rem", sm: "2rem", md: "2rem"},
          color: "#005689",
          textShadow: "-1.5px 1.5px #fff",
          fontWeight: 600,
          padding: "1.5rem"
        }}
      >
        勉強中・興味のあること
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          display: {sm: "flex"},
        }}
      >
        <Box
          className="interest-container"
          sx={{
            backgroundColor: "#fff",
            width: {xs: "100%", sm: "50%"},
            marginRight: {sm: "1rem"},
            marginBottom: {xs: "1.5rem", sm: "0"},
            fontSize: { xs: "1.2rem", sm: "1rem", md: "1.3rem" },
          }}
        >
          <ul className="thingsInterestedIn">
            <li>PHP/Laravel</li>
            <li>JavaScript/React</li>
            <li>HTML/CSS</li>
          </ul>
        </Box>
        <Box
          className="interest-container"
          sx={{
            backgroundColor: "#fff",
            width: {xs: "100%", sm: "50%"},
            fontSize: { xs: "1.2rem", sm: "1rem", md: "1.3rem" },
          }}
        >
          <ul className="thingsInterestedIn">
            <li>UI/UX Design</li>
            <li>英語</li>
            <li>などなど</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export { ThingsOfInterst };
