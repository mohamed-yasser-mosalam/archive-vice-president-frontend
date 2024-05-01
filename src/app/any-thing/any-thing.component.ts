
import {Component, DoCheck, HostBinding, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SpecialService} from "../Services/SpecialService/special.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {OverlayContainer} from "@angular/cdk/overlay";


@Component({
  selector: 'app-any-thing',
  templateUrl: './any-thing.component.html',
  styleUrls: ['./any-thing.component.css']
})
export class AnyThingComponent   implements OnInit {
  name: string;
  img: string;
  x:any;
  y:any
  id:string;
  userName:string;
  switchTheme = new FormControl(false)
  @HostBinding('class') className=""
  darkClass="dark"
  lightClass="light"
  idOfUser:string
  pageLength:number
  show:boolean = true
  unShow:boolean = !this.show

  constructor(private route: Router,
              private auth: AuthenticationServiceService,
              private http: HttpClient,
              private overlay: OverlayContainer
  ) {
  }

  ngOnInit(): void {
    this.name = this.auth.getName()
    this.img = this.auth.getUserImage()
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
    this.idOfUser=this.auth.getUserRoles()

  }

  onImageSelected(event) {
    const file = event.target.files[0]
    const formDate: FormData = new FormData()
    this.x = formDate.append("file", file)
    this.http.post(`http://localhost:1200/user/add-image?pathType=users&username=${this.userName}&id=${this.id}`,formDate).subscribe(
      (result) => {
        this.route.navigateByUrl('/login'),
          this.auth.clearToken()
      })

  }
  clearToken(){
    this.auth.clearToken()
  }
  hideMenu(): void {
    this.show =!this.show
    this.unShow =!this.unShow

  }
}
