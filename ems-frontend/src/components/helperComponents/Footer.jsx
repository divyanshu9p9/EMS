import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(to bottom, rgb(0, 16, 65), black)",
        color: "#ffffff",
        padding: "15px 20px",
        position: "fixed", // Sticks the footer to the bottom
        bottom: 0,
        left: 0,
        textAlign: "center",
        zIndex: 1000,
      }}
    >
      <Typography variant="body2" sx={{ fontSize: "14px" }}>
        © {new Date().getFullYear()} Capgemini. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;