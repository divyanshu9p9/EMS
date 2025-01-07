// styles/FormStyles.js
export const textFieldStyle = {
    width: "100%", // Ensures full width
    "& .MuiOutlinedInput-root": {
        backgroundColor: "white",
        borderRadius: "6px",
        transition: "all 0.2s ease-in-out",
        '&:hover': {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(0, 16, 65)",
            }
        },
       '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: "rgb(0, 16, 65)",
                borderWidth: "2px",
            }
        }
    },
    '& .MuiInputLabel-root': {
        color: "rgb(0, 16, 65)",
        '&.Mui-focused': {
            color: "rgb(0, 16, 65)",
        },
        fontSize: {
            xs: "0.9rem",
            sm: "0.925rem",
            md: "0.95rem"
        }
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: "rgba(0, 16, 65, 0.2)",
    },
    '& .MuiInputBase-input': {
        padding: {
            xs: "10px",
            sm: "11px",
            md: "12px"
        },
        fontSize: {
            xs: "0.9rem",
            sm: "0.925rem",
            md: "0.95rem"
        }
    }
};

export const buttonStyle = {
    minWidth: "100px", // Reduced width
    fontSize: { xs: "0.85rem", sm: "0.875rem", md: "0.9rem"},
    fontWeight: 600,
    textTransform: "none",
    padding: {
        xs: "8px 16px",
        sm: "8px 18px",
        md: "8px 20px"
    },
    borderRadius: "6px",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
    },
  };
