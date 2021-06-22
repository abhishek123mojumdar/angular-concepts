import { Component, OnInit } from '@angular/core';
import { MathematicalOperationService } from '../mathematical-operation.service';

@Component({
  selector: 'app-check-services',
  templateUrl: './check-services.component.html',
  styleUrls: ['./check-services.component.css'],
  providers: [MathematicalOperationService]
})
export class CheckServicesComponent implements OnInit {
  constructor(private math: MathematicalOperationService) {}
  public sum;
  ngOnInit() {
    this.sum = this.math.addNumbers(2, 3);
  }
}
