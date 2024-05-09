import {Component, OnInit} from '@angular/core';
import baseUrl from "../../../../url";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationServiceService} from "../../../../Services/Security/authentication-service.service";
import {Router} from "@angular/router";
import {UpdateUserInformationService} from "../../../../Services/updateUserInformation/update-user-information.service";
import {UserService} from "../../../../Services/user/user.service";

@Component({
  selector: 'app-show-user-information',
  templateUrl: './show-user-information.component.html',
  styleUrls: ['./show-user-information.component.css']
})
export class ShowUserInformationComponent  implements OnInit {
  formDate:any
  name: string;
  img: string;
  id: any;
  userName: string;
  pathOfDeleteImage: any
  base = baseUrl + '/'
  editUserName = new FormGroup({
    username: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    roles: new FormControl(''),
    phone:new FormControl('')
  })

  ngOnInit(): void {
    this.name = this.auth.getName()
    this.img = this.base + this.auth.getUserImage()
    this.id = +this.auth.getuserId()
    this.userName = this.auth.getUserName()
    this.updateUserInformationService.getUserInformationById(this.id)
      .subscribe((result:any) => {
        this.editUserName = new FormGroup({
          username: new FormControl(result['username']),
          firstName: new FormControl(result['firstName']),
          lastName: new FormControl(result['lastName']),
          password: new FormControl(result['password']),
          roles:new FormControl(result['roles']),
          phone: new FormControl(result['phone']),
        })
        console.log(this.updateUserInformationService.getUserInformationById(2))
      })
  }

  constructor(private auth: AuthenticationServiceService,
              private router: Router,
              private updateUserInformationService: UpdateUserInformationService,
              private userService:UserService,
              private route: Router,
  ) {
  }

  onImageSelected(event) {
    const file = event.target.files[0]
    const formDate: FormData = new FormData()
    this.formDate= formDate.append("file", file)
    this.userService.addImages(this.userName,this.id,formDate).subscribe(
      (result) => {
        // const imagePath = result.imagePath;
        // sessionStorage.setItem("imagePath", imagePath);
         this.route.navigateByUrl('/login'),
          this.auth.clearToken()
      })
  }
}
