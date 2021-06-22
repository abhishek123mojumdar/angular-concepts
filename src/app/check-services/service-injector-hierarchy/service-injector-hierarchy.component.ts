import { Component, OnInit } from '@angular/core';
import { MathematicalOperationService } from '../../mathematical-operation.service';

@Component({
  selector: 'app-service-injector-hierarchy',
  templateUrl: './service-injector-hierarchy.component.html',
  styleUrls: ['./service-injector-hierarchy.component.css']
})
export class ServiceInjectorHierarchyComponent implements OnInit {
  constructor(private op: MathematicalOperationService) {}
  public sumOp;
  ngOnInit() {
    this.sumOp = this.op.addNumbers(8, 9);
  }
}
