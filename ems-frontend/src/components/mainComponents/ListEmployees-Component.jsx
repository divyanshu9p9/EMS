import {useEffect, useState} from 'react'
import {listEmployees } from '../../services/EmployeeService'
import { useNavigate, useLocation } from 'react-router-dom'
import ListEmoloyeeHeader from "../helperComponents/ListEmployeeHeader";
import EmployeeDetails from "./EmployeeDetails-Component";
import EmployeeTable from '../helperComponents/EmployeeTable';
import Pagination from "../helperComponents/Pagination";
import Footer from "../helperComponents/Footer";
import '@fontsource/inter'; // Defaults to weight 400
import {
    Box,
    Button,
    TableContainer,
    Paper,
    Snackbar,
    Alert
  } from "@mui/material";
  import AddIcon from "@mui/icons-material/Add";
  import PersonAddIcon from '@mui/icons-material/PersonAdd';



const ListEmployeeComponent = () => {
    
    const [employees, setEmployees] = useState([])
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 
    const [currentPage, setCurrentPage] = useState(1);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const [clickCoordinates, setClickCoordinates] = useState({ left: 0, top: 0 });
    const employeesPerPage = 20;
    const navigator=useNavigate();
    const location = useLocation();
    
    useEffect(() => {
      const query = new URLSearchParams(location.search);
      const action = query.get('action');
      const employeeId = query.get('id');
    
      if (action === 'add' || (action === 'update' && employeeId)) {
        setShowSnackbar(true);
        setSnackbarMessage(
          action === 'add' 
            ? 'New Employee has been Added successfully' 
            : 'Details of the employee: ' + employeeId + ' has been Updated successfully'
        );
    
        // Clear the URL parameters after showing the message
        navigator(
          '/employees',
          { replace: true }  // This replaces the current URL in the history
        );
      }
    
      const timer = setTimeout(() => {
        setShowSnackbar(false);
      }, 4000);
    
      return () => clearTimeout(timer);
    }, [location.search, navigator]);

    useEffect(()=>{
        getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployees().then((response)=>{
            setEmployees(response.data);
            setFilteredEmployees(response.data);
        }).catch(error => {
            console.error('Error fetching employee data:', error);
        })
    }

    // Handle input change for search
    useEffect(() => {
        // Filter employees based on search term
        const filtered = employees.filter((employee) =>
          Object.values(employee).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        setFilteredEmployees(filtered);
      }, [searchTerm, employees]);
      
    // Pagination logic
    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const handleSearchChange = (term) => setSearchTerm(term);
    const handlePageChange = (page) => setCurrentPage(page);

    function handleViewEmployee(id, e){
      // Get the exact click coordinates relative to the viewport
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX || (rect.left + rect.width / 2);
      const clickY = e.clientY || (rect.top + rect.height / 2);
      setClickCoordinates({
        left: clickX,
        top: clickY
      });
      setOpenDialog(true);
      setSelectedEmployeeId(id);
    }

    const handleCloseDialog = () => {
      setOpenDialog(false);
      setSelectedEmployeeId(null);
    };

    function addNewEmployee(){
      navigator('/add-employee')
    }

  return (
    <div 
    style={{ fontFamily: "Arial, sans-serif",
      minHeight: "100vh", // Full height to accommodate the footer
      background:"rgb(250, 248, 239)",
    }}>
      {/* Navigation Bar and Search Panel */}
      <ListEmoloyeeHeader onSearchChange={handleSearchChange}/>

      {/* Table */}
      <Box
        sx={{
          marginTop:{xs:"45px", sm:"45px", md:"40px"},
          paddingLeft:{xs:"10px", sm:"40px", md:"100px"},
          paddingRight:{xs:"10px", sm:"40px", md:"100px"},
          backgroundColor: "rgb(250, 248, 239)",
          paddingBottom: "80px"
        }}
      >
        {/* Add Employee Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1px",
          }}
        >
          <Button
            onClick={addNewEmployee} variant="contained"
            sx={{
                fontSize:{xs:"12px", sm:"13px", md:"14px"},
                fontWeight:"bold",
                textTransform: "none",
                borderRadius: "20px 20px 0 0",
              backgroundColor: "rgb(0, 16, 65)",
              "&:hover": {
                backgroundColor: "rgb(0, 29, 117)",
                transform: "scale(1.02)",
                transition: "all 0.3s ease-in-out",
              },
            }}
          >
            <Box sx={{display: { xs: "none", sm: "block" },}}>
              <AddIcon fontSize="xs"/>
              Add Employee
            </Box>
            <Box sx={{display: { xs: "block", sm: "none" },}}>
              <PersonAddIcon fontSize="small"/>
            </Box>
          </Button>
        </Box>
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: "0 10px 10px 10px",
            boxShadow: "0 4px 30px rgb(0, 16, 65)",
          }}
        >
          {/* Table Content */}
          <EmployeeTable employees={currentEmployees}
          onViewEmployee={handleViewEmployee}
          />

          {/* Employee Details Dialog */}
          {selectedEmployeeId && (
            <EmployeeDetails
              id={selectedEmployeeId}
              open={openDialog}
              onClose={handleCloseDialog}
              getEmployeesList={getAllEmployees}
              originCoordinates={clickCoordinates}
            />
          )}
        </TableContainer>
        <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredEmployees.length / employeesPerPage)}
            onPageChange={handlePageChange}
        />
      </Box>
      <Footer />
      {showSnackbar && (
        <Snackbar
          open={showSnackbar}
          autoHideDuration={4000}
          onClose={() => setShowSnackbar(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert 
            onClose={() => setShowSnackbar(false)} 
            severity="success" 
            sx={{ 
              fontSize: { xs: '0.7rem', sm: '0.875rem' },
              width: '100%',
              backgroundColor: 'rgb(0, 94, 28)',
              borderRadius: '50px',
              color: 'rgb(250, 248, 239)',
              '& .MuiAlert-icon': {
                color: 'rgb(250, 248, 239)'
              }
            }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      )}
    </div>
  )
}

export default ListEmployeeComponent