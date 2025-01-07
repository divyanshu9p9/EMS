import Grid2 from "@mui/material/Grid2";
import { Stack, TextField, Typography } from "@mui/material";
import PhoneInput from "../helperComponents/PhoneInput";
import { textFieldStyle } from "../../utils/FormStyles";
import PropTypes from 'prop-types';

export const PersonalDetailsForm = ({ 
    employeeId,
    id, setId,
    firstName, setFirstName,
    lastName, setLastName,
    email, setEmail,
    contactNumber,
    errors,
    handlePhoneChange
}) => {
    return (
        <Grid2 xs={12} md={6} sx={{width: {xs:"100%", md:"48.5%"},}}>
            <Typography variant="subtitle1" sx={{
                color: "rgb(0, 16, 65)",
                fontWeight: 600,
                mb: { xs: 1, sm: 1.25, md: 1.5 },
                fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
            }}>
                Personal Details
            </Typography>
            <Stack spacing={{ xs: 1.5, sm: 2, md: 2 }} 
            >
                {!employeeId && (
                    <TextField
                        fullWidth
                        label="Employee ID"
                        value={id}
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '');
                            if (value.length <= 8) {
                                setId(value);
                            }
                        }}
                        error={!!errors.id}
                        helperText={errors.id}
                        sx={textFieldStyle}
                        placeholder="Enter 8 digit Employee Id"
                    />
                )}
                <TextField
                    fullWidth
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    sx={textFieldStyle}
                    placeholder="Enter First Name"
                />
                <TextField
                    fullWidth
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    sx={textFieldStyle}
                    placeholder="Enter Last Name"
                />
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={textFieldStyle}
                    placeholder="Enter Email with @domain_name"
                />
                <PhoneInput 
                    contactNumber={contactNumber}
                    onPhoneChange={handlePhoneChange}
                    errors={errors}
                    textFieldStyle={textFieldStyle}
                />
            </Stack>
        </Grid2>
    );
};

PersonalDetailsForm.propTypes = {
    employeeId: PropTypes.string,
    id: PropTypes.string.isRequired,
    setId: PropTypes.func.isRequired,
    firstName: PropTypes.string.isRequired,
    setFirstName: PropTypes.func.isRequired,
    lastName: PropTypes.string.isRequired,
    setLastName: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
    contactNumber: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    handlePhoneChange: PropTypes.func.isRequired,
};