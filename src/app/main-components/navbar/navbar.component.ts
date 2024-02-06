import {Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationServiceService} from "../../Services/Security/authentication-service.service";
import {FormControl} from "@angular/forms";
import {OverlayContainer} from "@angular/cdk/overlay";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: string;
  img: string;
  x:any;
  id:string
  constructor(private route: Router,
              private auth: AuthenticationServiceService,
              private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.userName = this.auth.getUserName()
    this.img = this.auth.getUserImage()
    this.id=this.auth.getuserId()
  }

  onImageSelected(event) {
    const file = event.target.files[0]
    const formDate: FormData = new FormData()
    this.x = formDate.append("file", file)
    console.log(this.x)
    this.http.post(`http://localhost:1200/register/add-image?pathType=users&username=${this.userName}&id=${this.id}`, formDate).subscribe(
      response => {
        console.log("successfully")
      }
    )
  }
}
