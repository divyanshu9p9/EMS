import {useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import Grid2 from "@mui/material/Grid2";
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography,Card,} from "@mui/material";

import { createEmployee, getEmployee, updateEmployee} from "../../services/EmployeeService";
import { validateEmployeeForm } from "../../utils/FormValidation";
import { FormHeader } from "../helperComponents/FormHeader";
import {PersonalDetailsForm} from "../helperComponents/PersonalDetailsForm";
import {ProfessionalDetailsForm} from "../helperComponents/ProfessionalDetailsForm";
import { buttonStyle } from '../../utils/FormStyles';

const AddUpdateEmployee = () => {
    const [id, setId]=useState('')
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [designation, setDesignation] = useState('')
    const [department, setDepartment] = useState('')
    const [baseLocation, setBaseLocation] = useState('')
    const [averageAttendance, setAverageAttendance] = useState('')

    const {employeeId}= useParams();
    const navigator= useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
  
    const[errors, setErrors] = useState({
        employeeId:'',
        firstName:'',
        lastName:'',
        email:'',
        contactNumber:'',
        designation:'',
        department:'',
        baseLocation:'',
        averageAttendance:''
    })

    useEffect(()=>{
        if (employeeId) {
            getEmployee(employeeId).then((response)=>{
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
        }
    }, [employeeId])

    function validateForm() {
        const formValues = {
            id, firstName, lastName, email, contactNumber,
            designation, department, baseLocation, averageAttendance
        };
        const { isValid, errors: tempErrors } = validateEmployeeForm(formValues, !!employeeId);
        setErrors(tempErrors);
        return isValid;
    }

    const handlePhoneChange = (phoneNumber) => {
        setContactNumber(phoneNumber);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (validateForm()){
            if(employeeId){
                const employee={firstName, lastName, email, contactNumber: contactNumber, designation,department, baseLocation, averageAttendance}
                updateEmployee(employeeId, employee).then((response) => {
                    console.log(response.data);
                }).catch(err =>{
                    console.error(err);
                })
            } else {
                const employee={id:id.toString(), firstName, lastName, email, contactNumber: contactNumber, designation,department, baseLocation, averageAttendance}
                createEmployee(employee).then((response) => {
                    console.log(response.data);
                }).catch(err =>{
                    console.error(err);
                })
            }
            if(employeeId) {
                // After successful update
                navigator('/employees?action=update&id=' + employeeId);
            } else {
                // After successful create
                navigator('/employees?action=add');
            }
        }
    }

    const handleCancel = () => {
        navigator('/employees');
    };

return (
    <div style={{ 
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        backgroundColor: "rgb(250, 248, 239)",
        display: "flex",
        flexDirection: "column"
    }}>
        {/* Header Section */}
        <FormHeader employeeId={employeeId} />

        {/* Form Section */}
        <Box sx={{
            maxWidth: "1000px", // Reduced from previous width
            width: "100%",
            margin: "0 auto",
            padding: { xs: "0 10px", sm: "0 15px", md: "0 20px" },
            flex: 1,
            display: "flex",
            flexDirection: "column",
            marginBottom: { xs: "20px", sm: "25px", md: "30px"}
        }}>
            <Card sx={{
                backgroundColor: "white",
                borderRadius: { xs: "8px", sm: "10px", md: "12px" },
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                flex: 1,
                display: "flex",
                flexDirection: "column",
            }}>
                {/* Form Header */}
                <Box sx={{
                    backgroundColor: "rgb(0, 16, 65)",
                    padding: { xs: "10px 15px", sm: "12px 18px", md: "12px 20px" }
                }}>
                    <Typography variant="h6" sx={{ 
                        color: "white",
                        fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" }
                    }}>
                        Employee Details
                    </Typography>
                </Box>

                {/* Form Content */}
                <Box sx={{ 
                    padding: { xs: "15px 10px", sm: "18px 12px", md: "20px 15px" },
                    flex: 1,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <form onSubmit={handleSubmit} style={{ height: "100%",}}>
                        <Box sx={{ 
                            display: "flex", 
                            flexDirection: "column",
                            height: "100%"
                        }}>
                            {/* Form Fields Container */}
                            <Grid2 container spacing={{ xs: 1, sm: 2.5, md: 2.5 }}>
                                {/* Left Column -Personal Information */}
                                <PersonalDetailsForm 
                                    employeeId={employeeId} 
                                    id={id} setId={setId}
                                    firstName={firstName} setFirstName={setFirstName}
                                    lastName={lastName} setLastName={setLastName}
                                    email={email} setEmail={setEmail}
                                    contactNumber={contactNumber}
                                    errors={errors} setErrors={setErrors}
                                    handlePhoneChange={handlePhoneChange}
                                />

                                {/* Right Column - Professional Information*/}
                                <ProfessionalDetailsForm 
                                    designation={designation} setDesignation={setDesignation}                                    
                                    department={department} setDepartment={setDepartment}                                    
                                    baseLocation={baseLocation} setBaseLocation={setBaseLocation}
                                    averageAttendance={averageAttendance} setAverageAttendance={setAverageAttendance}
                                    errors={errors} setErrors={setErrors}
                                />

                            </Grid2>
                            {/* Action Buttons */}
                            <Box sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "auto",
                                pt: { xs: 2, sm: 2.5, md: 2.5 },
                                borderTop: "1px solid rgba(0, 0, 0, 0.12)",
                                marginTop: { xs: "20px", sm: "25px", md: "30px" },
                                gap: { xs: "100px"}
                            }}>
                                <Button
                                    onClick={handleCancel}
                                    variant="contained"
                                    fullWidth={matches} // Use matches from useMediaQuery
                                    sx={{...buttonStyle, background: "#800000",
                                            "&:hover": {...buttonStyle["&:hover"],
                                              backgroundColor: "rgb(189, 0, 0)" }}}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth={matches} // Use matches from useMediaQuery
                                    sx={{ ...buttonStyle, background: "rgb(0, 16, 65)",
                                        "&:hover": {...buttonStyle["&:hover"],
                                          backgroundColor: "rgb(0, 15, 150)" }}}
                                >
                                    {employeeId ? "Update" : "Save"}
                                </Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Card>
        </Box>
    </div>
  );
}

export default AddUpdateEmployee