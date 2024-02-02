import { Component } from '@angular/core';
import {AuthenticationServiceService} from "../../Services/Security/authentication-service.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private aut:AuthenticationServiceService) {
  }
   clearToken(){
    this.aut.clearToken()
   }
}
