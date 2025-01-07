// components/FormHeader.jsx
import { Box, Typography } from '@mui/material';
import NavBar from './NavBar';
import PropTypes from 'prop-types';

export const FormHeader = ({ employeeId }) => {
    return (
        <Box sx={{
            background: "linear-gradient(to bottom, black, rgb(0, 16, 65))",
            boxShadow: "0 8px 10px rgb(0, 0, 0)",
            position: "relative",
            marginBottom: "60px"
        }}>
            <NavBar />
            <Box sx={{
                position: "absolute",
                bottom: {xs: "-45px", sm: "-48px", md: "-48px"},
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgb(0, 16, 65)",
                color: "rgb(250, 248, 239)",
                padding: "10px 30px",
                borderRadius: "0 0 8px 8px",
                boxShadow: "0 8px 10px rgb(0, 0, 0)",
                zIndex: 1,
            }}>
                <Typography variant="h6" sx={{ 
                    fontSize: {xs: "0.98rem", sm: "1.1rem", md: "1.1rem"}, 
                    fontWeight: "bold"
                }}>
                    {employeeId ? "Update Employee" : "Add Employee"}
                </Typography>
            </Box>
        </Box>
    );
};

FormHeader.propTypes = {
    employeeId: PropTypes.string
};
