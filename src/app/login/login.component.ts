import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginParentGroup:FormGroup;
   constructor(private formChildGroup:FormBuilder,
              private auth:AuthenticationServiceService,
              private router:Router
  ) {
  }
  ngOnInit(): void {
    this.myFormLogin()
  }
  myFormLogin(){
    this.loginParentGroup = this.formChildGroup.group({
      user:this.formChildGroup.group({
        username:new FormControl('',[
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9]{5,})$')
        ]),
          password:['',[Validators.minLength(7)]]
      })
    })
  }
  login() {
    this.auth.executeAuthentication(
      this.loginParentGroup.controls['user'].value.username,
      this.loginParentGroup.controls['user'].value.password
    ).subscribe({
      next:respose=>{
        this.router.navigateByUrl("/home")
      },
      error:err => {
        alert(this.loginParentGroup.controls['user'].value.password)
        alert(this.loginParentGroup.controls['user'].value.username)
      }
    })

  }
}
