import { Typography, Box } from "@mui/material";


const SnsContent = () => {
  return (
    <>
      <main
        style={{
          backgroundColor: "#fff",
          width: { sm: "100%", md: "83%" },
          margin: "0 auto",
          height: "90vh",
        }}
      >
        <div className="sns github">github</div>
        <div className="sns wantedly">wantedly</div>
        <div className="sns linkedin">linkedin</div>
      </main>
      <Box sx={{ backgroundColor: "#fff", height: "95vh" }}>
        <h3>準備中</h3>
      </Box>
    </>
  );
};

export { SnsContent };
