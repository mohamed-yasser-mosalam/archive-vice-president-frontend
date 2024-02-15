import {Component, OnInit} from '@angular/core';
import {UpdateUserInformationService} from "../Services/updateUserInformation/update-user-information.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {Users} from "../Models/Users/users";

@Component({
  selector: 'app-change-password-by-admin',
  templateUrl: './change-password-by-admin.component.html',
  styleUrls: ['./change-password-by-admin.component.css']
})
export class ChangePasswordByAdminComponent implements OnInit {
  username: string;
  errorMessage: string
  InformationUserById: any

  constructor(private updateUserInformationService: UpdateUserInformationService,
              private router: Router, private routes: ActivatedRoute,
              private auth: AuthenticationServiceService,
  ) {
  }

  ngOnInit(): void {
    this.getInformationUserById()
  }


  getInformationUserById() {
    this.updateUserInformationService.getUserInformationById(this.routes.snapshot.paramMap['id']).subscribe((InformationUserById: any) => {
      this.InformationUserById = InformationUserById;
      console.log(this.InformationUserById.username)
    })
  }

  // changePassword(data: any) {
  //   this.updateUserInformationService.changePasswordByAdmin(this.username, data).subscribe(
  //     response => {
  //       this.router.navigateByUrl("/users")
  //     },
  //   )
  //
  // }
  changePassword(data){}
}
