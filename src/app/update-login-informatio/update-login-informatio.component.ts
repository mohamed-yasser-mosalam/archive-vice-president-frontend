import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../Services/Register/register.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {UpdateUserInformationService} from "../Services/updateUserInformation/update-user-information.service";

@Component({
  selector: 'app-update-login-informatio',
  templateUrl: './update-login-informatio.component.html',
  styleUrls: ['./update-login-informatio.component.css']
})
export class UpdateLoginInformatioComponent  implements OnInit{
  id= +this.auth.getuserId()
  x=this.routes.snapshot.params['id']

  editUserName = new FormGroup({
    username: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password:new FormControl('')
   })
  ngOnInit(): void {
    this.updateUserInformationService.getUserInformationById(this.id)
    .subscribe((result) => {
      this.editUserName = new FormGroup({
        username: new FormControl(result['username']),
        firstName: new FormControl(result['firstName']),
        lastName: new FormControl(result['lastName']),
        password:new FormControl(result['password']),
       })
      console.log(this.updateUserInformationService.getUserInformationById(2))
     })
  }

  updateUserInformation() {
    this.updateUserInformationService.update(this.id, this.editUserName.value).subscribe((result) => {
      this.router.navigateByUrl('/login')
    })
  }


  constructor(private registerService:RegisterService,
              private route:Router,
              private http:HttpClient,
              private serviceExport: ExportServiceService,private router:Router,
              private routes: ActivatedRoute,
              private  auth:AuthenticationServiceService,
              private updateUserInformationService:UpdateUserInformationService,
         ) {
  }


  onImageSelected(event){
    const file=event.target.files[0]
    const formDate:FormData=new FormData()
    this.x= formDate.append("file",file)
    console.log(this.x)
    this.http.post('http://localhost:1200/register/add-image?username=user&id=3&pathType=users',formDate).subscribe(
      response=>{
        console.log("successfully")
      }
    )
  }
}




