package net.div.ems.service.impl;

import net.div.ems.dto.EmployeeDetailsDto;
import net.div.ems.dto.EmployeeListDto;
import net.div.ems.entity.Employee;
import net.div.ems.exception.ResourceNotFoundException;
import net.div.ems.mapper.EmployeeMapper;
import net.div.ems.repository.EmployeeRepository;
import net.div.ems.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private final EmployeeRepository employeeRepository;

    @Override
    public EmployeeDetailsDto createEmployee(EmployeeDetailsDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDetailsDto(savedEmployee);
    }

    @Override
    public EmployeeDetailsDto getEmployeeById(String employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee does not exist with the given id : "+employeeId));
        return EmployeeMapper.mapToEmployeeDetailsDto(employee);
    }

    @Override
    public List<EmployeeListDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map(EmployeeMapper::mapToEmployeeListDto)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDetailsDto updateEmployee(String employeeId, EmployeeDetailsDto updatedEmployee) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee does not exist with the given id : "+employeeId));
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());
        employee.setContactNumber(updatedEmployee.getContactNumber());
        employee.setDesignation(updatedEmployee.getDesignation());
        employee.setDepartment(updatedEmployee.getDepartment());
        employee.setBaseLocation(updatedEmployee.getBaseLocation());
        employee.setAverageAttendance(updatedEmployee.getAverageAttendance());

        Employee updatedEmployeeObj = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDetailsDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(String employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee does not exist with the given id : "+employeeId));
        employeeRepository.deleteById(employeeId);
    }

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
}
