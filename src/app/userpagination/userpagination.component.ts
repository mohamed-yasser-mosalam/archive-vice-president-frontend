import {Component, OnInit} from '@angular/core';
import baseUrl from "../url";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UpdateUserInformationService} from "../Services/updateUserInformation/update-user-information.service";
import {UserService} from "../Services/user/user.service";
import {ActivateUserService} from "../Services/ActivateUsers/activate-user.service";

@Component({
  selector: 'app-userpagination',
  templateUrl: './userpagination.component.html',
  styleUrls: ['./userpagination.component.css']
})
export class UserpaginationComponent implements OnInit {
  page = this.routes.snapshot.params['page'];
  pageLength: number;
  size:number=1
  isActive:number
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
    this.getCountOfUsers();
    this.showUserById()
    this.userService.getUserById(this.id)
      .subscribe((result:any) => {
        this.showAllUsers = new FormGroup({
          username: new FormControl(result['username']),
          firstName: new FormControl(result['firstName']),
          lastName: new FormControl(result['lastName']),
          password: new FormControl(result['password']),
          roles: new FormControl(result['roles']),
          phone: new FormControl(result['phone']),
        })
        this.img=this.base+result.imagePath

      })
  }

  showUserById() {
    this.userService.getUserById(this.id).subscribe((result: any) => {
      this.user = result;
      this.img=this.base+result.imagePath;
      this.username=this.user.username;
      this.isActive=this.user.isActive;
    })
  }

  constructor(
    private routes: ActivatedRoute,
    private userService: UserService,
    private activateUserService:ActivateUserService,
    private router:Router
  ) {
  }
  unActivateUser(username:string){
    this.activateUserService.unActivateUser(username)
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }
  activatedUser(username:string){
    this.activateUserService.activateUser(username)
    setTimeout(() => {
      window.location.reload();
    }, 50);

  }
  getCountOfUsers(){
    this.userService.getCountOfUser().subscribe((result:any)=>{
      this.pageLength=result;
    })
  }
  change(event): void {
    this.page = event;
    this.showUserById();
    this.userService.getUserById(event).subscribe((result:any) => {
      this.showAllUsers = new FormGroup({
        username: new FormControl(result['username']),
        firstName: new FormControl(result['firstName']),
        lastName: new FormControl(result['lastName']),
        password: new FormControl(result['password']),
        roles: new FormControl(result['roles']),
        phone: new FormControl(result['phone']),
      });
      this.img=this.base+result.imagePath;

    });
    const nextPageUrl = `/userpagination/${this.id}`;
    this.router.navigate([nextPageUrl]);
  }
}
