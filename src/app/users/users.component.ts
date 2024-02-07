import { Component } from '@angular/core';
import {Showallexport} from "../Models/showAllExports/showallexport";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {HttpClient} from "@angular/common/http";
import {Users} from "../Models/Users/users";
import {RegisterService} from "../Services/Register/register.service";
import {UpdateUserInformationService} from "../Services/updateUserInformation/update-user-information.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  showUsers :Users[]=[];
  message:string="yes"
  x:any;
   constructor(private updateUserInformationService: UpdateUserInformationService, private http: HttpClient){

  }
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    return this.updateUserInformationService.getAllUsers().subscribe((getAllusers:any)=>{
      this.showUsers=getAllusers;
    })
  }


}
