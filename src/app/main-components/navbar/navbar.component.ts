import {Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationServiceService} from "../../Services/Security/authentication-service.service";
import {FormControl} from "@angular/forms";
import {OverlayContainer} from "@angular/cdk/overlay";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../Services/user/user.service";
import baseUrl from "../../url";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  formDate:any
  name: string;
  img: string;
  id:string;
  userName:string;
  pathOfDeleteImage:any
  base=baseUrl+'/'
  switchTheme = new FormControl(false)
  @HostBinding('class') className=""
  darkClass="dark"
  lightClass="light"


  constructor(private route: Router,
              private auth: AuthenticationServiceService,
              private http: HttpClient,
              private overlay: OverlayContainer,
              private userService:UserService
              ) {
  }

  ngOnInit(): void {
    this.name = this.auth.getName()
    this.img =this.base+ this.auth.getUserImage()
    this.id=this.auth.getuserId()
    this.userName=this.auth.getUserName()
    this.switchTheme.valueChanges.subscribe((currentTheme) => {
      this.className = currentTheme ? this.darkClass : this.lightClass
      if(currentTheme){
        this.overlay.getContainerElement().classList.add(this.darkClass)
      }else{
        this.overlay.getContainerElement().classList.remove(this.darkClass)

      }
     })

  }

  onImageSelected(event) {
    const file = event.target.files[0]
    const formDate: FormData = new FormData()
    this.formDate= formDate.append("file", file)
     this.userService.addImages(this.userName,this.id,formDate).subscribe(
      (result) => {
        this.route.navigateByUrl('/login'),
         this.auth.clearToken()
       })

   }
  clearToken(){
    this.auth.clearToken()
  }
}
