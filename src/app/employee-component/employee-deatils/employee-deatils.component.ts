import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-employee-deatils",
  templateUrl: "./employee-deatils.component.html",
  styleUrls: ["./employee-deatils.component.css"]
})
export class EmployeeDeatilsComponent implements OnInit {
  @Input() employeeDetail;
  constructor() {}

  ngOnInit() {
    console.log(this.employeeDetail);
  }

  checkIfEMployeeEligible(empData) {
    console.log(empData);
    if (empData.empSal < 1550000 && empData.empPerformance == 1) {
      return true;
    } else {
      return false;
    }
  }
}
