import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {OverlayContainer} from "@angular/cdk/overlay";
import {AuthenticationServiceService} from "../../../Services/Security/authentication-service.service";
import {UserService} from "../../../Services/user/user.service";
import baseUrl from "../../../url";
import {TaskService} from "../../../Services/Task/task.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name: string;
  img: string;
  id: string;
  userName: string;
  pathOfDeleteImage: any
  base = baseUrl + '/'
  notify: boolean = false;


  constructor(
    private auth: AuthenticationServiceService,
    private overlay: OverlayContainer,
    private taskService: TaskService
  ) {
  }

  ngOnInit(): void {
    this.name = this.auth.getName()
    this.img = this.base + this.auth.getUserImage()
    this.id = this.auth.getuserId()
    this.userName = this.auth.getUserName()
    this.taskService.findByDate().subscribe((res) => {
      this.notify = res.length > 0;
    })
  }
}
