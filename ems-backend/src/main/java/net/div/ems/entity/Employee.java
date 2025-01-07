package net.div.ems.entity;

import jakarta.persistence.*; // For JPA annotations
import jakarta.validation.constraints.*; // For validation annotations

@Entity
@Table(name="employees")
public class Employee {
    @Id
    @Column(name = "employee_id", nullable = false, unique = true)
    @Pattern(regexp = "^[0-9]{8}$", message = "Employee Id must be of 8 digits.")
    private String id;

    @Column(name="first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email_id", nullable = false, unique = true)
    @Email(message = "Invalid email format.")
    private String email;

    @Column(name = "contact_number", nullable = false, unique = true)
    @Pattern(regexp = "\\+\\d{1,3}-\\d{10}",
            message = "Contact number must be in the format '+<country code>-<10-digit number>' (eg., +91-0123456789)")
    private String contactNumber;

    @Column(name = "designation", nullable = false)
    private String designation;

    @Column(name = "department", nullable = false)
    private String department;

    @Column(name = "base_location", nullable = false)
    private String baseLocation;

    @Column(name = "average_attendance", nullable = false)
    private String averageAttendance;

    //Constructors

    public Employee(){}
    public Employee(String id, String firstName, String lastName, String email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    public Employee(String id, String firstName, String lastName, String email, String contactNumber, String designation, String department, String baseLocation, String averageAttendance) {
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
