import Grid2 from "@mui/material/Grid2";
import { Stack, TextField, Typography } from "@mui/material";
import { textFieldStyle } from "../../utils/FormStyles";
import PropTypes from 'prop-types';

export const ProfessionalDetailsForm = ({ 
    designation, setDesignation,
    department, setDepartment,
    baseLocation, setBaseLocation,
    averageAttendance, setAverageAttendance,
    errors,
}) => {
    return (
        <Grid2 xs={12} md={6} sx={{width: {xs:"100%", md:"48.5%"},}}>
            <Typography variant="subtitle1" sx={{
                color: "rgb(0, 16, 65)",
                fontWeight: 600,
                mb: { xs: 1, sm: 1.25, md: 1.5 },
                // Add top margin only for mobile view
                mt: { xs: 2, sm: 2, md: 0 },
                fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" }
            }}>
                Professional Details
            </Typography>
            <Stack spacing={{ xs: 1.5, sm: 2, md: 2 }}>
                <TextField
                    fullWidth
                    label="Designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    error={!!errors.designation}
                    helperText={errors.designation}
                    sx={textFieldStyle}
                    placeholder="Enter Designation"
                />
                <TextField
                    fullWidth
                    label="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    error={!!errors.department}
                    helperText={errors.department}
                    sx={textFieldStyle}
                    placeholder="Enter Department"
                />
                <TextField
                    fullWidth
                    label="Base Location"
                    value={baseLocation}
                    onChange={(e) => setBaseLocation(e.target.value)}
                    error={!!errors.baseLocation}
                    helperText={errors.baseLocation}
                    sx={textFieldStyle}
                    placeholder="Enter Base Location"
                />
                <TextField
                    fullWidth
                    label="Average Attendance"
                    value={averageAttendance}
                    onChange={(e) => setAverageAttendance(e.target.value)}
                    error={!!errors.averageAttendance}
                    helperText={errors.averageAttendance}
                    sx={textFieldStyle}
                    placeholder="Enter Average Attendance from: '0%' to '100%'"
                    slotProps={{
                        input: {
                            min: 0,
                            max: 100
                        }
                    }}
                />
            </Stack>
        </Grid2>
    );
};

ProfessionalDetailsForm.propTypes = {
    designation: PropTypes.string.isRequired,
    setDesignation: PropTypes.func.isRequired,
    department: PropTypes.string.isRequired,
    setDepartment: PropTypes.func.isRequired,
    baseLocation: PropTypes.string.isRequired,
    setBaseLocation: PropTypes.func.isRequired,
    averageAttendance: PropTypes.string.isRequired,
    setAverageAttendance: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};