import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {HttpClient} from "@angular/common/http";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {ActivatedRoute} from "@angular/router";
import {SignsService} from "../Services/signs/signs.service";

@Component({
  selector: 'app-sign-pagination',
  templateUrl: './sign-pagination.component.html',
  styleUrls: ['./sign-pagination.component.css']
})
export class SignPaginationComponent implements OnInit {
  id= this.routes.snapshot.params['page']
  no:number
  roleOfUser = this.auth.getUserRoles();
  page=this.routes.snapshot.params['page']
  pageLength: any;
  showSigns: any;
  size: number = 1;
  paths: string[];
  numbers: any = [];
 signForm = new FormGroup({
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
    this.showSignFile();
    this.form();
  }

  form(){
    this.signService.getSignsByPage(this.page).subscribe((result) => {
      this.signForm.patchValue({
        id:result['id'],
        universityYear:result['universityYear'],
        date: result['date'],
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
    private auth: AuthenticationServiceService,
    private routes: ActivatedRoute,

  ) {
  }

  showSignFile(): void {
    this.signService.getSignsByPage(this.page).subscribe((getSign: any) => {
      this.showSigns = getSign;
      this.id=this.showSigns.id;
     });
  }

  getSignNumber(): void {
    this.signService.getNumberOfSigns().subscribe((numberOfSigns: any) => {
      this.pageLength = numberOfSigns;
    });
  }

  change(event): void {
    this.page = event;
    this.showSignFile();
    this.signService.getSignsByPage(event).subscribe((result) => {
      this.signForm = new FormGroup({
        id: new FormControl(result['id']),
        universityYear: new FormControl(result['universityYear']),
        date: new FormControl( result['date']),
        sender: new FormControl( result['sender']),
        via: new FormControl( result['via']),
        signInformer:  new FormControl(result['signInformer']),
        signInformerSelf:  new FormControl(result['signInformerSelf']),
        signInformerPhone: new FormControl( result['signInformerPhone']),
        summary:  new FormControl(result['summary']),
        signSignature: new FormControl(result['signSignature']),
        signSelf: new FormControl(result['signSelf']),
        signRecipientName: new FormControl(result['signRecipientName']),
        signRecipientSelf: new FormControl(result['signRecipientSelf']),
        signRecipientDate: new FormControl(result['signRecipientDate']),
        signExcutedName:  new FormControl(result['signExcutedName']),
        signExcutedSelf: new FormControl(result['signExcutedSelf']),
        signExecutionDate:new FormControl( result['signExecutionDate']),
        depend: new FormControl(result['depend']),
    });
    });
  }





}
