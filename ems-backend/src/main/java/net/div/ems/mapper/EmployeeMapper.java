package net.div.ems.mapper;

import net.div.ems.dto.EmployeeDetailsDto;
import net.div.ems.dto.EmployeeListDto;
import net.div.ems.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDetailsDto mapToEmployeeDetailsDto(Employee employee){
        return new EmployeeDetailsDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                employee.getContactNumber(),
                employee.getDesignation(),
                employee.getDepartment(),
                employee.getBaseLocation(),
                employee.getAverageAttendance()
        );
    }

    public static Employee mapToEmployee(EmployeeDetailsDto employeeDetailsDto){
        return new Employee(
                employeeDetailsDto.getId(),
                employeeDetailsDto.getFirstName(),
                employeeDetailsDto.getLastName(),
                employeeDetailsDto.getEmail(),
                employeeDetailsDto.getContactNumber(),
                employeeDetailsDto.getDesignation(),
                employeeDetailsDto.getDepartment(),
                employeeDetailsDto.getBaseLocation(),
                employeeDetailsDto.getAverageAttendance()
        );
    }

    public static EmployeeListDto mapToEmployeeListDto(Employee employee){
        return new EmployeeListDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }
}
