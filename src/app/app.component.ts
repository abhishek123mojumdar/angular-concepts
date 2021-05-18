import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  activation = {
    employee: false,
    temperature: false
  };
  authorized = false;

  activate(type) {
    if (type === 'employee') {
      this.activation.employee = true;
      this.activation.temperature = false;
    } else if (type === 'temp') {
      this.activation.employee = false;
      this.activation.temperature = true;
    }
  }

  checkAuthorized(e) {
    this.authorized = e.authorized;
  }
}
