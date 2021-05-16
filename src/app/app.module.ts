import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { EmployeeComponentComponent } from "./employee-component/employee-component.component";
import { EmployeeDeatilsComponent } from "./employee-component/employee-deatils/employee-deatils.component";
import { ContentTemplateConatinerComponent } from './employee-component/content-template-conatiner/content-template-conatiner.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeeComponentComponent,
    EmployeeDeatilsComponent,
    ContentTemplateConatinerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
