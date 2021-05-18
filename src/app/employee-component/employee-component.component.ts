import { Component, OnInit } from '@angular/core';
import { employees } from '../data';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {
  constructor() {}
  public employee;
  public empDetail;
  public twoWayBinding;
  ngOnInit() {
    this.employee = employees;
  }

  getEmpStatus(per) {
    switch (per) {
      case 1:
        return 'Good';
      case 2:
        return 'Above average';
      case 3:
        return 'Average';
      case 4:
        return 'Needs work';
      default:
        return 'No such rating exsists';
    }
  }

  checkEmployeeForHike(emp) {
    this.empDetail = emp;
  }

  removeEmployee(emp) {
    this.employee.forEach((item, index) => {
      if (item.empCode == emp.empCode) {
        this.employee.splice(index, 1);
      }
    });
  }

  getInputData(e) {
    this.twoWayBinding = <HTMLInputElement>e.target.value;
  }
}
