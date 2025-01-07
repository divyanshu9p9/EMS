import PropTypes from "prop-types";
import '@fontsource/inter';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
  } from "@mui/material";
  import VisibilityIcon from "@mui/icons-material/Visibility";

const EmployeeTable = ({ employees, onViewEmployee,}) => {

  return (
    <>
      {/* Table */}
      <Table
        stickyHeader
        sx={{
        minWidth: "100%", // Ensure full width on mobile
          "& .MuiTableCell-root": {
            padding: { xs: "4px", sm: "8px" },
            whiteSpace: "nowrap", // Prevent text wrapping unless needed
            textOverflow: "ellipsis", // Ellipsis for overflowing text
            overflow: "hidden", // Prevent text overflow
          },
          "& .MuiTableRow-root": {
            height: { xs: "30px", sm: "40px" }, // Reduce row height for mobile
          },
        }}
      >
      <TableHead>
        <TableRow>
          <TableCell sx={{
              backgroundColor: "rgb(0, 16, 65)",
              color: "rgb(250, 248, 239)",
              fontWeight: "bold",
              fontSize: {xs:"12px", sm:"14px", md:"15px"}, // Adjust font size for better visibility
              }}>
              ID
          </TableCell>
          <TableCell sx={{
              backgroundColor: "rgb(0, 16, 65)",
              color: "rgb(250, 248, 239)",
              fontWeight: "bold",
              fontSize: {xs:"12px", sm:"14px", md:"15px"}, // Adjust font size for better visibility
              }}>
            First_Name
            </TableCell>
          <TableCell sx={{
              backgroundColor: "rgb(0, 16, 65)",
              color: "rgb(250, 248, 239)",
              fontWeight: "bold",
              fontSize: {xs:"12px", sm:"14px", md:"15px"}, // Adjust font size for better visibility
              }}>
            Last_Name
          </TableCell>
          <TableCell sx={{
              backgroundColor: "rgb(0, 16, 65)",
              color: "rgb(250, 248, 239)",
              fontWeight: "bold",
                  fontSize: {xs:"12px", sm:"14px", md:"15px"}, // Adjust font size for better visibility
                  }}>
            Email
        </TableCell>
          <TableCell sx={{
              backgroundColor: "rgb(0, 16, 65)",
              color: "rgb(250, 248, 239)",
              fontWeight: "bold",
              fontSize: {xs:"12px", sm:"14px", md:"15px"}, // Adjust font size for better visibility
              position: "sticky", // Sticky position
              right: 0, // Stick to the right
              zIndex: 2, // Ensure it remains above other columns
              }}>
            Details
          </TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
        {employees.length > 0 ? (
        employees.map((employee, index) => (
          <TableRow
            key={employee.id}
            sx={{
              backgroundColor:
                index % 2 === 0 ? "rgb(250, 248, 239)" : "rgba(156, 164, 175, 0.34)",
              "&:hover": {
                  background:"rgb(197, 201, 211)",
                },
            }}
          >
            <TableCell sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: {xs:"12px", sm:"14px", md:"15px"},
              fontWeight: "400",
              wordWrap: "break-word",
              whiteSpace: "normal",
            }}>
              {employee.id}
            </TableCell>
            <TableCell sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: {xs:"12px", sm:"14px", md:"15px"},
              fontWeight: "400",
              wordWrap: "break-word",
              whiteSpace: "normal",
            }}>
              {employee.firstName}
            </TableCell>
              <TableCell sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: {xs:"12px", sm:"14px", md:"15px"},
                fontWeight: "400",
                wordWrap: "break-word",
                whiteSpace: "normal",
              }}>
                {employee.lastName}
              </TableCell>
              <TableCell sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: {xs:"12px", sm:"14px", md:"15px"},
                fontWeight: "400",
                wordWrap: "break-word",
                whiteSpace: "normal",
              }}>
                {employee.email}
              </TableCell>
              <TableCell sx={{
                position: "sticky", // Sticky position
                right: 0, // Stick to the right
                backgroundColor: "rgb(250, 248, 239)", // Match the table row's background
                zIndex: 1, // Keep above other cells
              }}>
                <VisibilityIcon onClick={(e) => onViewEmployee(employee.id, e)}
                sx={{
                    color: "rgb(0, 16, 65)",
                    cursor: "pointer",
                    "&:hover": {
                    transform: "scale(1.1)", // Slightly larger size on hover
                }
                    }} />
              </TableCell>
            </TableRow>
          ))) : (
            <TableRow>
                <TableCell colSpan="5" sx={{
                    textAlign: "center",
                    padding: "10px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    }}>
                No employees found.
                </TableCell>
            </TableRow>
            )}
        </TableBody>
      </Table>
    </>
  );
};

EmployeeTable.propTypes = {
  employees: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      })
    ).isRequired,
    onViewEmployee: PropTypes.func.isRequired,
  };

export default EmployeeTable;

