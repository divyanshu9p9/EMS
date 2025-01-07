import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{
      background: "transparent",
      boxShadow: "none",
    }}>
      <Toolbar>
          <Typography variant="h6" sx={{
              color: "rgb(123, 132, 160)",
              fontWeight: 600,
            }}>
            Employee Management System
          </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;