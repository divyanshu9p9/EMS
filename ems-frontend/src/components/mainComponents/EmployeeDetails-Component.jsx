import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import PropTypes from "prop-types";
import { Dialog, Box, Button, Snackbar, Alert } from "@mui/material";
import { CloseIconButton } from "../helperComponents/CloseIconButton";
import { StripHeading } from "../helperComponents/StripHeading";
import InfoCard from "../helperComponents/InfoCard";
import { DisplayChartContainer } from "../helperComponents/DisplayChartContainer";
import { deleteEmployee, getEmployee} from "../../services/EmployeeService";

const EmployeeDetails = ({ id, open, onClose, getEmployeesList, originCoordinates}) => {

  const [employeeId, setEmployeeId] = useState({});[]
  const [dialogOpen, setDialogOpen] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [deletedEmployeeId, setDeletedEmployeeId] = useState('');
  const [firstName, setFirstName]=useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [designation, setDesignation] = useState('')
  const [department, setDepartment] = useState('')
  const [baseLocation, setBaseLocation] = useState('')
  const [averageAttendance, setAverageAttendance] = useState('')
  const navigator= useNavigate();

  useEffect(()=>{
    getEmployee(id).then((response)=>{
      setEmployeeId(response.data.id);
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setEmail(response.data.email);
      setContactNumber(response.data.contactNumber);
      setDesignation(response.data.designation);
      setDepartment(response.data.department);
      setBaseLocation(response.data.baseLocation);
      setAverageAttendance(response.data.averageAttendance)
    }).catch(error=>{
      console.error(error);
    })
  }, [id])

const personalInfo = {
  'Employee ID': id,
  'Email': email,
  'Contact Number': contactNumber
};

const businessInfo = {
  'Designation': designation,
  'Department': department,
  'Base Location': baseLocation
};

  function updateEmployeeById(employeeId){
      navigator(`/update-employee/${employeeId}`)
  }

  <label htmlFor=""></label>

  function deleteEmployeeById (id){
    deleteEmployee(id).then(() => {
      setDeletedEmployeeId(id);
      // Show success message first
      setOpenSnackbar(true);
      // Close dialog after a short delay
      setTimeout(() => {
        setDialogOpen(false); // Close dialog box after 2 seconds
        getEmployeesList();
      }, 500);
    }).catch(error => {
      console.error('Error deleting employee:', error);
    })
  }

  // Parse attendance string to number
  const parseAttendance = (attendance) => {
    if (!attendance) return 0;
    return parseFloat(attendance.replace("%", "")); // Remove % and convert to float
  };
  const attendanceValue = parseAttendance(averageAttendance || "0%");

  // Data for the attendance chart
  const COLORS = ["rgb(0, 16, 65)", "#800000"]; // Dark blue for presence, Maroon for absence
  const attendanceData = [
    { id: 0, value: attendanceValue, color: COLORS[0] },
    { id: 1, value: 100 - attendanceValue, color: COLORS[1] },
  ];

  const buttonStyle = {
    fontSize: { xs: '0.675rem', sm: '0.875rem' },
    padding: { xs: '5px 12px', sm: '6px 16px' },
    minWidth: { xs: '65px', sm: '80px' },
    borderRadius: "50px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    "&:hover": {boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)"}
  };

  return (
    <>
    <Dialog
      open={dialogOpen}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: "10px",
          backgroundColor: "rgb(250, 248, 239)",
          boxShadow: "0 4px 30px rgb(0, 16, 65)",
          position: "relative",
          transition: 'all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Smoother elastic effect
          transformOrigin: `${originCoordinates?.left}px ${originCoordinates?.top}px`,
          opacity: open ? 1 : 0,
          transform: open ? 'scale(1)' : 'scale(0.2)',
          '&.MuiDialog-paper': {
            margin: '16px' // Add some margin to prevent edge touching
          }
        }
      }}
      sx={{
        '& .MuiBackdrop-root': {
          transition: 'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)' // Smoother backdrop transition
        }
      }}
    >
      {/* Main Dialog Box */}
      <Box
        sx={{
          position: "relative",
          backgroundColor: "rgb(250, 248, 239)",
          borderRadius: "20px",
          boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
          padding: "20px",
        }}
      >
        {/* CloseIconButton to close Dialog Box*/}
        <CloseIconButton handleClose={onClose}/>

        {/* Gradient Strip Heading*/}
        <StripHeading>{firstName} {lastName}</StripHeading>

        {/* Content Cards */}
        <Box
          sx={{
            marginTop: { xs: "23px", sm: "32px", md: "41px" },
            display: "flex",
            flexDirection: { xs: "column", sm:"row", md: "row" }, // Stack on mobile/tablet, row on desktop
            gap: {xs:"15px", sm:"17px", md:"20px"},
          }}
        >
          {/* Personal Info Card */}
          <InfoCard title="Personal Information" data={personalInfo} />

          {/* Business Info Card */}
          <InfoCard title="Business Information" data={businessInfo} />
        </Box>

        {/* Display Attendance Chart */}
        <DisplayChartContainer  chartHeading="Average Attendance" chartData={attendanceData}/>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px", }} >
          <Button
            variant="contained" color="error" onClick={() => deleteEmployeeById(id)}
            sx={{ ...buttonStyle, background: "#800000",
              "&:hover": {...buttonStyle["&:hover"],
                backgroundColor: "rgb(189, 0, 0)" }}}
          > Delete
          </Button>
          <Button variant="contained" onClick={() => updateEmployeeById(employeeId)}
             sx={{ ...buttonStyle, background: "rgb(0, 16, 65)",
              "&:hover": {...buttonStyle["&:hover"],
                backgroundColor: "rgb(0, 15, 150)" }}}
          > Update
          </Button>
        </Box>
      </Box>
    </Dialog>
    <Snackbar 
      open={openSnackbar} 
      autoHideDuration={4000} // Show for 5 seconds
      onClose={() => setOpenSnackbar(false)}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
      <Alert 
        severity="success" 
        onClose={() => setOpenSnackbar(false)}
        sx={{ 
          fontSize: { xs: '0.7rem', sm: '0.875rem' },
          width: '100%',
          backgroundColor: '#800000',
          borderRadius: '50px',
          color: 'rgb(250, 248, 239)',
          '& .MuiAlert-icon': {
            color: 'rgb(250, 248, 239)'
          }
        }}
      >
        Employee: {deletedEmployeeId} has been deleted successfully!
      </Alert>
    </Snackbar>
  </>
  );
};

EmployeeDetails.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  getEmployeesList: PropTypes.func.isRequired,
  originCoordinates: PropTypes.shape({
    left: PropTypes.number,
    top: PropTypes.number,
  })
};

export default EmployeeDetails;