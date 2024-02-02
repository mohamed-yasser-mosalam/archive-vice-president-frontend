import { Component } from '@angular/core';
import {RegisterService} from "../Services/Register/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    constructor(private RegisterService:RegisterService,
                private route:Router) {
    }
    createUser(data:any){
      this.RegisterService.createUser(data).subscribe(result=>{
        this.route.navigateByUrl("/home")
      })
    }
}
