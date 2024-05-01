import {Component, OnInit} from '@angular/core';
import {UpdateUserInformationService} from "../Services/updateUserInformation/update-user-information.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {Users} from "../Models/Users/users";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-change-password-by-admin',
  templateUrl: './change-password-by-admin.component.html',
  styleUrls: ['./change-password-by-admin.component.css']
})
export class ChangePasswordByAdminComponent implements OnInit {

  informationUserById: Users
  id = +this.routes.snapshot.params['id']
  username: string
  changePasswordByAdmin: any

  constructor(private updateUserInformationService: UpdateUserInformationService,
              private router: Router, private routes: ActivatedRoute,
              private auth: AuthenticationServiceService,
              private http: HttpClient
  ) {
  }

  ngOnInit(): void {
  }


  changePassword(newPassword: any) {
    this.updateUserInformationService.changePasswordByAdmin(this.id,newPassword).subscribe()
    this.router.navigateByUrl("/home")
   }


}
