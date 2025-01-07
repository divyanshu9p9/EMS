package net.div.ems.dto;


import jakarta.persistence.Column;

public class EmployeeDetailsDto {
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String contactNumber;
    private String designation;
    private String department;
    private String baseLocation;
    private String averageAttendance;

    public EmployeeDetailsDto(){}
    public EmployeeDetailsDto(String id, String firstName, String lastName, String email,
            String contactNumber, String designation, String department, String baseLocation, String averageAttendance) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.designation = designation;
        this.department = department;
        this.baseLocation = baseLocation;
        this.averageAttendance = averageAttendance;
    }

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactNumber() {
        return contactNumber;
    }
    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getDesignation() {
        return designation;
    }
    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getDepartment() {
        return department;
    }
    public void setDepartment(String department) {
        this.department = department;
    }

    public String getBaseLocation() {
        return baseLocation;
    }
    public void setBaseLocation(String baseLocation) {
        this.baseLocation = baseLocation;
    }

    public String getAverageAttendance() {
        return averageAttendance;
    }
    public void setAverageAttendance(String averageAttendance) {
        this.averageAttendance = averageAttendance;
    }
}
