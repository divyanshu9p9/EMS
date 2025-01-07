// import React from "react";
import PropTypes from "prop-types";

import { Stack, Button } from "@mui/material";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Stack direction="row" justifyContent="center" mt={2}>
      {Array.from({ length: totalPages }, (_, i) => (
        <Button
          key={i}
          onClick={() => onPageChange(i + 1)}
          sx={{
            mx: 0.5,
            color: currentPage === i + 1 ? "#FFFFFF" : "#BBB",
            backgroundColor: "rgb(0, 16, 65)",
            "&:hover": { backgroundColor: "rgb(0, 29, 117)" },
          }}
        >
          {i + 1}
        </Button>
      ))}
    </Stack>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;