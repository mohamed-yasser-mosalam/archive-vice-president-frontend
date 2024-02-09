import {Component} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Users} from "../Models/Users/users";
import {UpdateUserInformationService} from "../Services/updateUserInformation/update-user-information.service";
import {ActivateUserService} from "../Services/ActivateUsers/activate-user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  showUsers: Users[] = [];
  message: string = "yes"
  x: any;

  constructor(private updateUserInformationService: UpdateUserInformationService, private http: HttpClient,
              private activateUserService:ActivateUserService) {

  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    return this.updateUserInformationService.getAllUsers().subscribe((getAllusers: any) => {
      this.showUsers = getAllusers;
    })
  }
  activatedUser(username:string){
     this.activateUserService.activateUser(username)
   }
   unActivateUser(username:string){
    this.activateUserService.unActivateUser(username)
   }

}
