import { Typography, Box } from "@mui/material";

const Certification = () => {
  return (
    <>
      <Box
        sx={{
          p: "3rem",
          fontWeight: "600",
          fontSize: "1.5rem",
          fontWeight: 600,
          backgroundColor: "#ffeaee",
          margin: "0 auto",
          padding: { xs: "2rem 3rem", sm: "2rem 4rem" },
          lineHeight: {xs: "2rem", sm: "3rem", md: "4rem"},
        }}
      >
        <Typography
          sx={{
            textShadow: "-1px 1px #fff",
            color: "#005689",
            fontSize: { xs: "1.5rem", sm: "2rem" },
            fontWeight: 600,
          }}
        >
          資格
        </Typography>
        <div>
          <ul>
            <li>
              <Typography
                sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, fontWeight: 600 }}
              >
                TOEIC 900点（2020/12）
              </Typography>
            </li>
          </ul>
        </div>
      </Box>
    </>
  );
};

export { Certification };
