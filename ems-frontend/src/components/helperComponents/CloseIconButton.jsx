import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

// Button component with close icon functionality
export const CloseIconButton = ({ handleClose }) => {
  return (
    <IconButton
        onClick={handleClose}
        aria-label="close"
        sx={{
            position: 'absolute',
            right: '5px',
            top: '5px',
            backgroundColor: 'rgb(250, 248, 239)',
            color: 'rgb(0, 16, 65)',
            zIndex: 1,
            // Add responsive sizing
            padding: { xs: '4px', sm: '8px' },
            '& .MuiSvgIcon-root': {
            fontSize: { xs: '1rem', sm: '1.25rem' }
            },
            '&:hover': {
            backgroundColor: 'rgb(0, 16, 65)',
            color: 'rgb(250, 248, 239)',
            transform: 'scale(1.1)',
            },
            transition: 'all 0.2s ease-in-out',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
    >
        <CloseIcon />
    </IconButton>
  );
};

CloseIconButton.propTypes = {
  handleClose: PropTypes.func.isRequired,
};