import {Component, OnInit} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Users} from "../../../../Models/Users/users";
import {UpdateUserInformationService} from "../../../../Services/updateUserInformation/update-user-information.service";
import {ActivateUserService} from "../../../../Services/ActivateUsers/activate-user.service";
import {AuthenticationServiceService} from "../../../../Services/Security/authentication-service.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  showUsers: Users[] = [];
  message: string = "yes"
  x: any;
  idOfUser:string

  constructor(private updateUserInformationService: UpdateUserInformationService, private http: HttpClient,
              private activateUserService:ActivateUserService,private auth:AuthenticationServiceService) {

  }

  ngOnInit(): void {
    this.getAllUsers();
    this.idOfUser=this.auth.getuserId();
  }

  getAllUsers() {
    return this.updateUserInformationService.getAllUsers().subscribe((getAllusers: any) => {
      this.showUsers = getAllusers;
    })
  }
  activatedUser(username:string){
     this.activateUserService.activateUser(username)
    setTimeout(() => {
      window.location.reload();
    }, 50);

   }
   unActivateUser(username:string){
    this.activateUserService.unActivateUser(username)
     setTimeout(() => {
       window.location.reload();
     }, 50);
   }


}
