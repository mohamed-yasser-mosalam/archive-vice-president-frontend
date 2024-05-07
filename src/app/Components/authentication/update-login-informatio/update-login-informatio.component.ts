import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationServiceService} from "../../../Services/Security/authentication-service.service";
import {UpdateUserInformationService} from "../../../Services/updateUserInformation/update-user-information.service";
import baseUrl from "../../../url";

@Component({
  selector: 'app-update-login-informatio',
  templateUrl: './update-login-informatio.component.html',
  styleUrls: ['./update-login-informatio.component.css']
})
export class UpdateLoginInformatioComponent implements OnInit {
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
    password: new FormControl(''), roles: new FormControl(''),
    phone: new FormControl('')
  })

  ngOnInit(): void {
    this.name = this.auth.getName()
    this.id = this.routes.snapshot.params['id']
    this.updateUserInformationService.getUserInformationById(this.id)
      .subscribe((result: any) => {
        this.editUserName = new FormGroup({
          username: new FormControl(result['username']),
          firstName: new FormControl(result['firstName']),
          lastName: new FormControl(result['lastName']),
          password: new FormControl(result['password']),
          roles: new FormControl(result['roles']),
          phone: new FormControl(result['phone']),
        })
        this.userName = result.username;
        this.img = this.base+result.imagePath
      })
  }

  constructor(private auth: AuthenticationServiceService,
              private router: Router,
              private updateUserInformationService: UpdateUserInformationService,
              private routes: ActivatedRoute,
  ) {
  }

  updateUserInformation() {
    this.updateUserInformationService.update(this.id, this.editUserName.value).subscribe((result: any) => {
      this.router.navigateByUrl('/login');
      this.auth.clearToken();
      // sessionStorage.setItem("username", 'aaaa');
      // this.router.navigateByUrl('/home');

    })
  }

}
