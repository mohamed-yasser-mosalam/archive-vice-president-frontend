import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from "../../Services/Security/authentication-service.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  implements OnInit{
  idOfUser:string
  constructor(private aut:AuthenticationServiceService,private auth:AuthenticationServiceService) {
  }
   clearToken(){
    this.aut.clearToken()
   }

  ngOnInit(): void {
    this.idOfUser=this.auth.getUserRoles()
  }

}
