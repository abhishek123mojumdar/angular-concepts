import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild
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
  constructor(private renderer: Renderer2) {}
  @ViewChild('showErr', { static: true }) showErr: ElementRef;
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
    let counter = 0;
    this.authorizationData.forEach(auth => {
      if (formData.userName == auth.name && formData.passWord == auth.pass)
        this.authorizedState.emit({ authorized: true });
      else {
        counter = counter + 1;
      }
    });

    if (counter == this.authorizationData.length) {
      const text = this.renderer.createText(
        'Some error in email id and password . Please check'
      );
      this.renderer.appendChild(this.showErr.nativeElement, text);
      this.renderer.setStyle(
        this.showErr.nativeElement,
        'background-color',
        'red'
      );
    }
  }
}
