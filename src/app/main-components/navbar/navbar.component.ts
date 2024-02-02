import {Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationServiceService} from "../../Services/Security/authentication-service.service";
import {FormControl} from "@angular/forms";
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  fullName: string;
  img: string ;

  constructor(private route:Router,
              private AuthenticationServiceService:AuthenticationServiceService,
              private overlay:OverlayContainer) {
  }

  ngOnInit(): void {
    this.fullName = this.AuthenticationServiceService.getUserName()
    this.img = this.AuthenticationServiceService.getUserImage()
  }

}
