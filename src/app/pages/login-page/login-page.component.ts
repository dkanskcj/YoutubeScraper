import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  createForm = new FormGroup({
    name: new FormControl(null),
    password: new FormControl(null)
  })



  constructor() { }

  ngOnInit(): void {
  }


  login(){

  }
  logout(){
    
  }
}
