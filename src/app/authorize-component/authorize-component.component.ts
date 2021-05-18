import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { authorize } from '../data';

@Component({
  selector: 'app-authorize-component',
  templateUrl: './authorize-component.component.html',
  styleUrls: ['./authorize-component.component.css']
})
export class AuthorizeComponentComponent implements OnInit {
  public authorizationData;
  public loginError = false;
  public loginErrMsg = '';
  constructor() {}
  @Output() authorizedState = new EventEmitter<{ authorized: boolean }>();
  ngOnInit() {
    this.authorizationData = authorize;
  }

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    passWord: new FormControl('', [Validators.required])
  });

  onSubmit() {
    let formData = this.loginForm.value;
    this.authorizationData.forEach(auth => {
      if (formData.userName == auth.name && formData.passWord == auth.pass)
        this.authorizedState.emit({ authorized: true });
      else {
        this.loginError = true;
        this.loginErrMsg = 'Some error in email id and password . Please check';
      }
    });
  }
}
