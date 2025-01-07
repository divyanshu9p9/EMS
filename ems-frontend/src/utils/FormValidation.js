// FormValidation.js

export const validateEmployeeForm = (values, isUpdate = false) => {
    let errors = {};
    let isValid = true;

    // Employee ID validation only for Add operation
    if (!isUpdate) {
        if (!values.id) {
            errors.id = "Employee ID is required";
            isValid = false;
        } else if (!/^\d{8}$/.test(values.id)) {
            errors.id = "Employee ID must be 8 digits";
            isValid = false;
        }
    }

    // First Name validation
    if(!values.firstName?.trim()) {
        errors.firstName = 'First Name is required';
        isValid = false;
    }

    // Last Name validation
    if(!values.lastName?.trim()) {
        errors.lastName = 'Last Name is required';
        isValid = false;
    }

    // Email validation
    if(!values.email?.trim()) {
        errors.email = 'Email is required';
        isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
        isValid = false;
    }

    // Contact Number validation
    if (!values.contactNumber) {
        errors.contactNumber = 'Contact Number is required';
        isValid = false;
    } else if (!/^\+\d{1,4}-\d{10}$/.test(values.contactNumber)) {
        errors.contactNumber = 'Please enter a valid contact number in the format +<country code>-<10-digit number>';
        isValid = false;
    }

    // Designation validation
    if(!values.designation?.trim()) {
        errors.designation = 'Designation is required';
        isValid = false;
    }

    // Department validation
    if(!values.department?.trim()) {
        errors.department = 'Department is required';
        isValid = false;
    }

    // Base Location validation
    if(!values.baseLocation?.trim()) {
        errors.baseLocation = 'Base Location is required';
        isValid = false;
    }

    // Average Attendance validation
    if(!values.averageAttendance?.trim()) {
        errors.averageAttendance = 'Average Attendance is required';
        isValid = false;
    } else if (!/^(100|[1-9]?[0-9])%$/.test(values.averageAttendance)) {
        errors.averageAttendance = 'Average Attendance must be in format: "0%" to "100%"';
        isValid = false;
    }

    return {
        isValid,
        errors
    };
};