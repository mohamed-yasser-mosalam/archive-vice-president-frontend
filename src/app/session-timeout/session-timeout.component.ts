import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import baseUrl from "../url";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UpdateUserInformationService} from "../Services/updateUserInformation/update-user-information.service";

@Component({
  selector: 'app-session-timeout',
  templateUrl: './session-timeout.component.html',
  styleUrls: ['./session-timeout.component.css']
})
export class SessionTimeoutComponent implements OnInit {
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
    password: new FormControl('')
  })

  ngOnInit(): void {
    this.name = this.auth.getName()
    this.img = this.base + this.auth.getUserImage()
    this.id = +this.auth.getuserId()
    this.userName = this.auth.getUserName()
    this.updateUserInformationService.getUserInformationById(this.id)
      .subscribe((result) => {
        this.editUserName = new FormGroup({
          username: new FormControl(result['username']),
          firstName: new FormControl(result['firstName']),
          lastName: new FormControl(result['lastName']),
          password: new FormControl(result['password']),
        })
        console.log(this.updateUserInformationService.getUserInformationById(2))
      })
  }

  constructor(private auth: AuthenticationServiceService,
              private router: Router,
              private updateUserInformationService: UpdateUserInformationService,) {
  }

  updateUserInformation() {
    this.updateUserInformationService.update(this.id, this.editUserName.value).subscribe((result) => {
      this.router.navigateByUrl('/login');
      this.auth.clearToken()
    })
  }
}
