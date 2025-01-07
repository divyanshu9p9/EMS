import { Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';

export function StripHeading({ children }) {
  return (
    <Box
        sx={{
        position: "absolute",
        top: { xs: "4px", sm: "6px", md: "8px" },
        left: 0,
        background: "linear-gradient(to right, black, rgb(0, 16, 65))",
        fontWeight: "bold",
        padding: { xs: "4px 20px", sm: "5px 30px", md: "6px 40px" }, // Adjusted padding
        boxShadow:  "0 9px 10px rgb(0, 0, 0)", // Shadow like the panel
        clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)",
        display: "inline-block", // Ensures the width adjusts dynamically based on the content
        }}
    >
        <Typography 
        variant="h6" 
        sx={{
            fontSize: { xs: "16px", sm: "18px", md: "21px" }, // Responsive font size
            color: "rgb(226, 236, 255)",
            fontWeight: "bold",
            marginLeft: "-16px"
        }}
        >
        {children}
        </Typography>
    </Box>
  );
}
StripHeading.propTypes = {
    children: PropTypes.node.isRequired,
  };