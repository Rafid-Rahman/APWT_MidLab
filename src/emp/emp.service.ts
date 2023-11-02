import { Injectable } from '@nestjs/common';
import { EmpDto } from './emp.dto';
import { Employee } from './emp.model';

@Injectable()
export class EmpService {
    employees:Employee[] = [];


    create(employeeDto: EmpDto){
        const newEmployee = new Employee(employeeDto.id, employeeDto.empName, employeeDto.contactNo, employeeDto.username, employeeDto.password);
        this.employees.push(newEmployee);
        return newEmployee;
      }

    
      findAll(){
        return [...this.employees];
      }
    
      findOne(id: number): Employee {
        return this.employees.find((employee) => employee.id === id);
      }
    
      update(id: number, employeeDto: EmpDto): EmpDto {
        const employeeIndex = this.employees.findIndex((employee) => employee.id === id);
    
        if (employeeIndex === -1) {
          return null;
        }
    
        this.employees[employeeIndex] = { ...this.employees[employeeIndex], ...employeeDto };
        return this.employees[employeeIndex];
      }
    
      remove(id: number): boolean {
        const employeeIndex = this.employees.findIndex((employee) => employee.id === id);
    
        if (employeeIndex === -1) {
          return false;
        }
    
        this.employees.splice(employeeIndex, 1);
        return true;
      }
    
}
