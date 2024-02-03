import {Component, numberAttribute} from '@angular/core';
import {RegisterService} from "../Services/Register/register.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   id:number

    constructor(private RegisterService:RegisterService,
                private route:Router,
                private http:HttpClient) {
    }
    createUser(data:any){
      this.RegisterService.createUser(data).subscribe(result=>{
        this.route.navigateByUrl("/home")
      })
    }

    OnImageSelected(event){
      var file=event.target.files[0]
      const formDate:FormData=new FormData()
      formDate.append("file",file.name)
      this.http.post('http://localhost:1200/image/upload?id=5&pathType=users',formDate.get(file)).subscribe(
        response=>{
          console.log("successfully")
        }
      )
       console.log(formDate.get(file))
    }


}
