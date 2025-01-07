package net.div.ems.controller;

//import lombok.AllArgsConstructor;
import jakarta.validation.Valid;
import net.div.ems.dto.EmployeeDetailsDto;
import net.div.ems.dto.EmployeeListDto;
import net.div.ems.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    //Build Add Employee REST API
    @PostMapping
    public ResponseEntity<EmployeeDetailsDto> createEmployee (@Valid @RequestBody EmployeeDetailsDto employeeDto){
        EmployeeDetailsDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    //Build Gte Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDetailsDto> getEmployeeById(@PathVariable("id") String employeeId){
        EmployeeDetailsDto employeeDto = employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDto);
    }

    //Build Get All Employees REST API
    @GetMapping
    public ResponseEntity<List<EmployeeListDto>> getAllEmployees(){
        List<EmployeeListDto> employeeDtoList = employeeService.getAllEmployees();
        return ResponseEntity.ok(employeeDtoList);
    }

    //Build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDetailsDto> updateEmployee(@Valid @PathVariable("id") String employeeId,
                                                             @RequestBody EmployeeDetailsDto updatedEmployee){
        EmployeeDetailsDto employeeDto = employeeService.updateEmployee(employeeId, updatedEmployee);
        return ResponseEntity.ok(employeeDto);
    }

    //Build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") String employeeId){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee deleted successfully");
    }
}
