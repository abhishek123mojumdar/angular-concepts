import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-authorize-component',
  templateUrl: './authorize-component.component.html',
  styleUrls: ['./authorize-component.component.css']
})
export class AuthorizeComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    passWord: new FormControl('', [Validators.required])
  });

  onSubmit() {
    console.log(this.loginForm);
  }
}
