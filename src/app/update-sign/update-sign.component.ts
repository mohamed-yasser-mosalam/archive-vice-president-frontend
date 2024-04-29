import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SignsService} from "../Services/signs/signs.service";
import {HttpClient} from "@angular/common/http";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-sign',
  templateUrl: './update-sign.component.html',
  styleUrls: ['./update-sign.component.css']
})
export class UpdateSignComponent implements OnInit {
  id= this.routes.snapshot.params['page']
  no:number
  roleOfUser = this.auth.getUserRoles();
  page=this.routes.snapshot.params['page']
  pageLength: any;
  showSigns: any;
  size: number = 1;
  paths: string[];
  numbers: any = [];
  editSignForm = new FormGroup({
    id:new FormControl(''),
    universityYear:new FormControl(''),
    date: new FormControl(''),
    sender:new FormControl(''),
    via: new FormControl(''),
    signInformer: new FormControl(''),
    signInformerSelf: new FormControl(''),
    signInformerPhone: new FormControl(''),
    summary: new FormControl(''),
    signSignature: new FormControl(''),
    signSelf: new FormControl(''),
    signRecipientName: new FormControl(''),
    signRecipientSelf: new FormControl(''),
    signRecipientDate: new FormControl(''),
    signExcutedName: new FormControl(''),
    signExcutedSelf: new FormControl(''),
    signExecutionDate: new FormControl(''),
    depend: new FormControl(''),
  });

  ngOnInit(): void {
    this.getSignNumber();
    this.showSign();
    this.form();
  }

  form(){
    this.signService.getSignsByPage(this.page).subscribe((result) => {
      this.editSignForm.patchValue({
        id:result['id'],
        date: result['date'],
        universityYear: result['universityYear'],
        sender:result['sender'],
        via:result['via'],
        signInformer:result['signInformer'],
        signInformerSelf: result['signInformerSelf'],
        signInformerPhone: result['signInformerPhone'],
        summary: result['summary'],
        signSignature:result['signSignature'],
        signSelf:result['signSelf'],
        signRecipientName:result['signRecipientName'],
        signRecipientSelf:result['signRecipientSelf'],
        signRecipientDate:result['signRecipientDate'],
        signExcutedName: result['signExcutedName'],
        signExcutedSelf:result['signExcutedSelf'],
        signExecutionDate: result['signExecutionDate'],
        depend:result['depend'],
      });
    });
  }
  constructor(
    private signService: SignsService,
    private router: Router,
    private auth: AuthenticationServiceService,
    private routes: ActivatedRoute,

  ) {
  }
  updateSign( ){
    this.signService.updateSigns(this.page,this.editSignForm.value).subscribe(( ) => {
      this.router.navigate([`/sign_pagination/`, this.id])
    })
  }


  showSign(): void {
    this.signService.getSignsByPage(this.page).subscribe((getSign: any) => {
      this.showSigns = getSign;
      });
  }

  getSignNumber(): void {
    this.signService.getNumberOfSigns().subscribe((numberOfSigns: any) => {
      this.pageLength = numberOfSigns;
    });
  }






}
