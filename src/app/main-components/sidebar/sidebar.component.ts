import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from "../../Services/Security/authentication-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  implements OnInit{
  idOfUser:string
  pageLength:number
  constructor(private aut:AuthenticationServiceService,private auth:AuthenticationServiceService,
              private http: HttpClient,
  ) {
  }
  getExportCount(): void {
    this.http.get('http://localhost:1200/export/count').subscribe((numberOfExportFiles: any) => {
      this.pageLength = numberOfExportFiles;
    });
  }

  ngOnInit(): void {
    this.idOfUser=this.auth.getUserRoles()
    this.getExportCount()
  }

}
