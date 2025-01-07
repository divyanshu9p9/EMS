import { Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';

export const LegendsOfChart = ({ data }) => {
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginRight: { xs: "0px", sm: "5px" },
        marginLeft: { xs: "0px", sm: "-80px" },
        marginTop: { xs: "-20px", sm: "0" }, // Add negative top margin only on mobile
        marginBottom: { xs: "10px", sm: "0" }, // Add bottom margin only on mobile
        }}
        >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px"}}>
        <Box
            sx={{
            width: "15px",
            height: "15px",
            backgroundColor: data[0].color,
            borderRadius: "2px",
            }}
        ></Box>
        <Typography sx={{
            fontSize: {xs:"13.5px", md:"15px"},
            color: "#333",
            fontWeight: "bold"}} >
            Presence: {data[0].value}%
        </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px", }}>
        <Box
            sx={{
            width: "15px",
            height: "15px",
            backgroundColor:data[1].color,
            borderRadius: "2px",
            }}
        ></Box>
        <Typography sx={{ fontSize: {xs:"13.5px", md:"15px"}, color: "#333", fontWeight: "bold"}} >
            Absence: {data[1].value}%
        </Typography>
        </Box>
    </Box>
  );
};
LegendsOfChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
    })
  ).isRequired,
};
