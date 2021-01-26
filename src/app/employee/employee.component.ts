import { Component, OnInit } from "@angular/core";
import { employees } from "../data";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  constructor() {}
  public employee;
  public empDetail;
  ngOnInit() {
    this.employee = employees;
  }

  getEmpStatus(per) {
    switch (per) {
      case 1:
        return "Good";
        break;
      case 2:
        return "Above average";
        break;
      case 3:
        return "Average";
        break;
      case 4:
        return "Needs work";
        break;
      default:
        return "No such rating exsists";
        break;
    }
  }

  checkEmployeeForHike(emp) {
    this.empDetail = emp;
  }
}
