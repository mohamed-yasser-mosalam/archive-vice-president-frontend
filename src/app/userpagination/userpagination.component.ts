import {Component, OnInit} from '@angular/core';
import baseUrl from "../url";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UpdateUserInformationService} from "../Services/updateUserInformation/update-user-information.service";
import {UserService} from "../Services/user/user.service";

@Component({
  selector: 'app-userpagination',
  templateUrl: './userpagination.component.html',
  styleUrls: ['./userpagination.component.css']
})
export class UserpaginationComponent implements OnInit {
  user: any;
  img:string;
  username:any
  id = this.routes.snapshot.params['page']
  pathOfDeleteImage: any
  base = baseUrl + '/'
  showAllUsers = new FormGroup({
    username: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    roles: new FormControl(''),
    phone: new FormControl('')
  })

  ngOnInit(): void {
    this.showUserById()
    this.userService.getUserById(this.id)
      .subscribe((result) => {
        this.showAllUsers = new FormGroup({
          username: new FormControl(result['username']),
          firstName: new FormControl(result['firstName']),
          lastName: new FormControl(result['lastName']),
          password: new FormControl(result['password']),
          roles: new FormControl(result['roles']),
          phone: new FormControl(result['phone']),
        })
      })
  }

  showUserById() {
    this.userService.getUserById(this.id).subscribe((result: any) => {
      this.user = result;
      this.img=this.base+result.imagePath;
      this.username=result.username
    })
  }

  constructor(
    private routes: ActivatedRoute,
    private userService: UserService,
  ) {
  }
}
