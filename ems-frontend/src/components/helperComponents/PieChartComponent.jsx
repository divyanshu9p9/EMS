import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import PropTypes from 'prop-types';

// Function to create a pie chart for employee data
export const PieChartComponent = ({ attendanceData }) => {

  return (
    <PieChart
        series={[
            {
            data: attendanceData.map((d)=>({id:d.id, value:d.value, color:d.color})),
            highlightScope: { fade: "global", highlight: "item" },
            faded: {
                innerRadius: 20, // Shrink effect for opposite part
                additionalRadius: -20,
                color: "gray",
            },
            arcLabel: (item) => `${item.value}%`, // Add this for arc labels
            arcLabelMinAngle: 36,
            arcLabelRadius: '61%',
            colorScheme: attendanceData.map((data) => data.color), // Use custom colors
            },
        ]}
        tooltip={{ 
            trigger: 'none' // This correctly disables the tooltip
        }}            
        slotProps={{
            legend: { hidden: true },
        }}
        sx={{
            [`& .${pieArcLabelClasses.root}`]: {  // Add this for additional label styling
            fill: 'white',
            fontWeight: 'bold',
            fontSize: {
                xs: '0.6rem',
                sm: '0.7rem',
                md: '0.8rem'
            },
            },
        }}
    />
  );
};
PieChartComponent.propTypes = {
  attendanceData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};