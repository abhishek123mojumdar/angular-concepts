import { Injectable } from '@angular/core';

@Injectable()
export class MathematicalOperationService {

  constructor() { }
  public addNumbers(a,b) {
    return a+b
  }
}