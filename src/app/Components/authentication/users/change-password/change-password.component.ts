import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationServiceService} from "../../../../Services/Security/authentication-service.service";
import {UpdateUserInformationService} from "../../../../Services/updateUserInformation/update-user-information.service";
import baseUrl from "../../../../url";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  name:string
  username: string;
  errorMessage: string;
  img: string;
  base = baseUrl + '/'
  constructor(private updateUserInformationService: UpdateUserInformationService,
              private router: Router,
              private auth: AuthenticationServiceService,
  ) {
  }

  ngOnInit(): void {
    this.username = this.auth.getUserName();
    this.img = this.base + this.auth.getUserImage();
    this.name=this.auth.getName()
  }

  changePassword(data: any) {
    this.updateUserInformationService.changePassword(this.username,data).subscribe(
      response => {
        this.router.navigateByUrl("/login"),
          this.auth.clearToken()
      },
      (err) => {
        this.errorMessage = err.message
        // if(this.errorMessage!=null){
        //   alert('الرقم السري المدخل غير صحيح')
        // }
        alert(err.error.message)
      }
    )

  }
}





