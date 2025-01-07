package net.div.ems.service;

import net.div.ems.dto.EmployeeDetailsDto;
import net.div.ems.dto.EmployeeListDto;

import java.util.List;

public interface EmployeeService {

    EmployeeDetailsDto createEmployee(EmployeeDetailsDto employeeDto);

    EmployeeDetailsDto getEmployeeById(String employeeId);

    List<EmployeeListDto> getAllEmployees();

    EmployeeDetailsDto updateEmployee(String employeeId, EmployeeDetailsDto updatedEmployee);

    void deleteEmployee(String employeeId);
}
