import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between", // Ensures proper alignment
          padding: { xs: "0 10px", sm: "0 20px" }, // Responsive padding
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            color: "rgb(123, 132, 160)",
            fontWeight: 600,
            fontSize: { xs: "1rem", sm: "1.25rem" }, // Responsive font size
          }}
        >
          Employee Management System
        </Typography>

        {/* Responsive Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{
            display: { xs: "block", md: "none" }, // Show only on small screens
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;