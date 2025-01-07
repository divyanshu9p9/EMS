import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Box } from '@mui/material';

const InfoCard = ({ title, data }) => {

    const styles = {
        formLabel: {
            fontSize: {xs:"12px", sm:"14px", md:"15px"}, 
            fontWeight: "bold", 
            color:"rgb(250, 248, 239)",
            display: "flex", 
            justifyContent: "space-between"
        },
        formValue: {
            fontSize: {xs:"12px", sm:"14px", md:"15px"}, 
            color:"rgb(250, 248, 239)", 
            wordBreak: "break-word"
        },
        sectionTitle: {
            fontSize: {xs:"14px", sm:"15px", md:"16px"}, // Font size for the heading
            fontWeight: "bold",
            marginBottom: {xs:"8px", sm:"11px", md:"14px"},
            color:"rgb(250, 248, 239)" 
        },
        cardStyle: {
            flex: 1,
            background: "linear-gradient(to right, black, rgb(0, 16, 65))",
            color: "white",
            padding: { xs: "12px", sm: "15px" },
            borderRadius: "10px",
            boxShadow:  "0 9px 10px rgb(0, 0, 0)", // Shadow like the panel
            "&:hover": {
                  transform: "scale(1.02)", // Slightly larger size on hover
              },
            transition: "transform 0.2s ease-in-out",
          }
    };

  return (
    <Card sx={styles.cardStyle}>
      <Typography sx={styles.sectionTitle}>
        {title}
      </Typography>
      <Box
        sx={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            columnGap: "20px",
            rowGap: "5px",
        }}
      >
        {Object.entries(data).map(([key, value], index) => (
          <React.Fragment key={index}>
            <Typography sx={styles.formLabel}>
              {key} <span>:</span>
            </Typography>
            <Typography sx={styles.formValue}>{value}</Typography>
          </React.Fragment>
        ))}
      </Box>
    </Card>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default InfoCard;