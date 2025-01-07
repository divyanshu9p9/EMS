// PhoneInput.jsx
import { useState, useEffect } from 'react';
import { Box, Autocomplete, TextField, Typography, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import { getCountries, getCountryCallingCode, parsePhoneNumberFromString } from 'libphonenumber-js';

const PhoneInput = ({ contactNumber, onPhoneChange, errors, textFieldStyle }) => {
    const [selectedCountry, setSelectedCountry] = useState('IN');
    const [phoneNumber, setPhoneNumber] = useState('');

    const getCountrySelectOptions = () => {
        return getCountries().map(country => ({
            code: '+' + getCountryCallingCode(country),
            country: new Intl.DisplayNames(['en'], { type: 'region' }).of(country),
            countryCode: country,
            searchLabel: `${new Intl.DisplayNames(['en'], { type: 'region' }).of(country)} (+${getCountryCallingCode(country)})`
        })).sort((a, b) => a.country.localeCompare(b.country));
    };

    useEffect(() => {
        if (contactNumber) {
            try {
                const parsedNumber = parsePhoneNumberFromString(contactNumber);
                if (parsedNumber) {
                    setSelectedCountry(parsedNumber.country);
                    setPhoneNumber(parsedNumber.nationalNumber);
                }
            } catch (error) {
                console.error('Error parsing phone number:', error);
                setSelectedCountry('IN');
            }
        } else {
            setSelectedCountry('IN');
        }
    }, [contactNumber]);

    // Handle phone number changes
    useEffect(() => {
        if (selectedCountry && phoneNumber) {
            const fullNumber = `+${getCountryCallingCode(selectedCountry)}-${phoneNumber}`;
            onPhoneChange(fullNumber);
        }
    }, [selectedCountry, phoneNumber, onPhoneChange]);

    return (
        <Box sx={{ 
            display: 'flex', 
            gap: { xs: 1, sm: 1.5, md: 1.5 },
            width: '100%'
        }}>
            <Autocomplete
                disablePortal
                disableClearable={true}
                options={getCountrySelectOptions()}
                value={getCountrySelectOptions().find(option => option.countryCode === selectedCountry) || null}
                onChange={(event, newValue) => {
                    setSelectedCountry(newValue ? newValue.countryCode : 'IN');
                }}
                getOptionLabel={(option) => option.searchLabel}
                renderOption={(props, option) => (
                    <li {...props} key={option.countryCode}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' },
                        }}>
                            <span style={{ marginRight: '8px' }}>{option.code}</span>
                            {option.country}
                        </Box>
                    </li>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Country Code"
                        sx={{
                            ...textFieldStyle,
                            '& .MuiInputBase-root': {
                                height: {xs:"43px", sm:'47x', md:'50px'},
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'rgba(0, 0, 0, 0.23)',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'rgba(0, 0, 0, 0.87)',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'rgb(0, 16, 65)',
                                }
                            }
                        }}
                        placeholder="Search country"
                    />
                )}
                sx={{
                    flexShrink: 0,
                    width: 'auto',
                    minWidth: '90px',
                    '& .MuiAutocomplete-input': {
                        width: '20px !important',
                        transition: 'width 200ms ease',
                        '&:focus': {
                            width: '150px !important'
                        }
                    },
                    '& .MuiInputBase-root': {
                        width: { xs: '121px', sm: '125px' },
                        '&.Mui-focused': {
                            width: { xs: '180px', sm: '200px' },
                        },
                        transition: 'width 200ms ease',
                        paddingRight: '32px !important'
                    },
                    '& .MuiAutocomplete-endAdornment': {
                        position: 'absolute',
                        right: '7px',
                        top: 'calc(50% - 12px)',
                        '& .MuiButtonBase-root': {
                            padding: '0px'
                        }
                    },
                    '& .MuiAutocomplete-clearIndicator': {
                        display: 'none'
                    },
                    '& .MuiAutocomplete-popupIndicator': {
                        transform: 'none',
                        '&.MuiAutocomplete-popupIndicatorOpen': {
                            transform: 'rotate(180deg)'
                        }
                    }
                }}
            />

            <TextField
                fullWidth
                label="Contact Number"
                value={phoneNumber}
                onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 10) {
                        setPhoneNumber(value);
                    }
                }}
                error={!!errors.contactNumber}
                helperText={errors.contactNumber}
                placeholder="Enter 10-digit number"
                slotProps={{
                    input: {
                        maxLength: 10,
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                        startAdornment: (
                            <InputAdornment position="start">
                                <Typography sx={{
                                    color: 'rgba(0, 0, 0, 0.87)',
                                    fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.95rem' }
                                }}>
                                    {getCountrySelectOptions().find(option => option.countryCode === selectedCountry)?.code}-
                                </Typography>
                            </InputAdornment>
                        ),
                    }
                }}
                sx={{
                    ...textFieldStyle,
                    flex: 1,
                    transition: 'flex 200ms ease',
                    '& .MuiInputBase-root': {
                        height: {xs:"43px", sm:'47x', md:'50px'},
                        paddingLeft: { xs: '8px', sm: '12px' }  // Adjusted padding
                    },
                    '& .MuiInputAdornment-root': {
                        userSelect: 'none', // Prevents text selection
                        pointerEvents: 'none', // Makes it non-interactive
                        marginRight: '-5px'  // Reduced space between prefix and number
                    }
                }}
            />
        </Box>
    );
};

PhoneInput.propTypes = {
    contactNumber: PropTypes.string,
    onPhoneChange: PropTypes.func.isRequired,
    errors: PropTypes.object,
    textFieldStyle: PropTypes.object
};

export default PhoneInput;