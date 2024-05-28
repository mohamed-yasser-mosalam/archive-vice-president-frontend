import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from "../../../Services/Security/authentication-service.service";
import {AuthGuardService} from "../../../Services/guard/auth-guard.service";
import {DatabaseService} from "../../../Services/databasebacup/database.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userRole: string

  constructor(private auth: AuthenticationServiceService, private authGuardService: AuthGuardService,
              private dataBaseService : DatabaseService) {
  }

  ngOnInit(): void {
    this.userRole = this.auth.getUserRoles();

  }

  backUp() {
    this.dataBaseService.backupDatabase().subscribe(value => alert(value))

  }

  restore() {
    this.dataBaseService.restoreDatabase().subscribe(value => alert(value))

  }
}

