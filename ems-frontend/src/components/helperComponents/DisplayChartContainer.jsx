import { Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { PieChartComponent } from "./PieChartComponent";
import { LegendsOfChart } from "./LegendsOfChart";


export function DisplayChartContainer({ chartHeading, chartData }) {
    return (
        <Box
          sx={{
            marginTop: {xs:"17px", sm:"20px"},
            padding: { xs: "10px", sm: "12px", md: "15px" },
            marginLeft: { xs: "10px", sm: "110px", md: "220px" },
            marginRight: { xs: "10px", sm: "110px", md: "220px" },
            backgroundColor: "rgb(250, 248, 239)",
            borderRadius: "10px",
            boxShadow: "0 4px 30px rgb(0, 16, 65)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "&:hover": {
                    transform: { sm: "scale(1.02)" }, // Slightly larger size on hover
                },
            transition: "transform 0.2s ease-in-out",
          }}
        >
          <Typography sx={{
                fontSize: { xs: "14px", sm: "15.5px", md: "17px" },
                fontWeight: "bold",
                marginBottom: "-40px", // Pull up the chart
              }}
              textAlign="center"
          >
            {chartHeading}
          </Typography>
          {/* Chart and Legend Container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on tablet/desktop
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "20px", sm: "-30px" },
            }}>
            {/* Pie Chart */}
            <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "200px", sm: "220px", md: "250px" }, // Responsive chart size
              height: { xs: "200px", sm: "220px", md: "250px" },
              marginBottom: "-30px", // Add negative margin to pull content up
              marginLeft: { xs: "95px", sm: "15px" }, // Add negative left margin only on mobile
              }}>
              {/* Call PieChartComponent and pass the attendance data */}
              <PieChartComponent attendanceData={chartData} />
            </Box>

            {/* Legend */}
            <LegendsOfChart data={chartData} />
          </Box>
        </Box>
    );
}

DisplayChartContainer.propTypes = {
  chartHeading: PropTypes.string.isRequired,
  chartData: PropTypes.arrayOf(PropTypes.object).isRequired,
};