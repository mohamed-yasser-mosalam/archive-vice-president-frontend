import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {UpdateUserInformationService} from "../Services/updateUserInformation/update-user-information.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  username: string;
  errorMessage:string

  constructor(private updateUserInformationService: UpdateUserInformationService,
              private router: Router,
              private auth: AuthenticationServiceService,
  ) {
  }

  ngOnInit(): void {
    this.username = this.auth.getUserName()
  }

  changePassword(data: any) {

    this.updateUserInformationService.changePassword(this.username, data).subscribe(
      response => {
        this.router.navigateByUrl("/login"),
          this.auth.clearToken()
      },
      (err)=>{
        this.errorMessage=err.message
        // if(this.errorMessage!=null){
        //   alert('الرقم السري المدخل غير صحيح')
        // }
      }
    )

  }
}





