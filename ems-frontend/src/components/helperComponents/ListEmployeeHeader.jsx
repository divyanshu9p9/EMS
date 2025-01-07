import { PropTypes } from 'prop-types';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import '@fontsource/inter'; // Defaults to weight 400
import {
    Box,
    TextField,
    InputAdornment,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import NavBar  from "./NavBar";
  
const ListEmployeeHeader = ({onSearchChange}) => {
  const [searchValue, setSearchValue] = useState(''); // Add this state

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    onSearchChange(e.target.value);
  };

  const handleClearClick = () => {
    setSearchValue('');
    onSearchChange('');
  };

  return (
    <>
      {/* Navigation Bar and Search Panel */}
      <Box
        sx={{
          background: "linear-gradient(to bottom, black,rgb(0, 16, 65))",
          paddingBottom: "50px",
          boxShadow: "0 8px 10px rgb(0, 0, 0)", 
          position: "relative",
        }}
      >
        {/* Navigation Bar */}
        <NavBar/>

        {/* Search Panel */}
        <Box sx={{
            textAlign: "center",
             marginTop: "20px",
             display: "flex",
            justifyContent: "center",
            alignItems: "center",
             }}>
            <TextField
                value={searchValue}
                placeholder="Search by ID, Name or Email"
                variant="outlined"
                onChange={handleSearchChange}
                sx={{
                width: {xs:"90%", sm:"70%", md:"50%"},
                height: { xs: "30spx", sm: "35px", md: "40px" }, // Adjust height for responsiveness
                background: "rgb(250, 248, 239)",
                borderRadius: "20px",
                transition: "all 0.3s ease-in-out", // Smooth transition for size and shadow
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)", // Default shadow
                "&:hover": {
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.7)", // Stronger shadow on hover
                    transform: "scale(1.01)", // Slightly larger size on hover
                },
                "& .MuiOutlinedInput-root": {
                    borderRadius: "20px", // Rounded corners
                    height: { xs: "30px", sm: "35px", md: "40px" }, // Ensure input height matches the outer container
                    fontSize: { xs: "13px", sm: "14px", md: "15px" }, // Adjust font size
                    "& fieldset": {
                    border: "none", // Removes the thin blue border
                    },
                    "&.Mui-focused": {
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.7)", // Stronger shadow on focus
                    transform: "scale(1.01)", // Slightly larger size on focus
                    },
                    '& .MuiInputAdornment-root': {
                    // Add styles for the adornments container
                    marginRight: '4px',
                  },
                },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                        <InputAdornment position="start">
                        <SearchIcon sx={{ color: "gray", marginRight: "8px" }} />
                        </InputAdornment>
                    ),
                    endAdornment: searchValue && (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="clear search"
                          onClick={handleClearClick}
                          edge="end"
                          size="small"
                          sx={{
                            color: 'gray',
                            '&:hover': {
                              color: 'black',
                            },
                          }}
                        >
                          <ClearIcon fontSize="small" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
            />
        </Box>

        <Box
            sx={{
                position: "absolute",
                bottom: {xs:"-41px", sm:"-44px", md:"-47px"}, // Adjust positioning to overlap with the panel slightly
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor:"rgb(0, 16, 65)", // Deep dark blue-black color
                color: "rgb(250, 248, 239)",
                marginRight: {xs:"0px", sm:"30px", md:"50px"},
                padding: {xs:"10px 25px", sm:"10px 40px", md:"10px 50px"}, // Add padding for text
                fontWeight: "bold",
                fontSize: {xs:"14px", sm:"16px",md:"18px"},
                borderRadius: "0 0 5px 5px", // Rounded corners
                boxShadow:  "0 9px 10px rgb(0, 0, 0)", // Shadow like the panel
                textAlign: "center",
            }}
            >
            Employees List
        </Box>
      </Box>
    </>
  );
};

ListEmployeeHeader.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
  };

export default ListEmployeeHeader;