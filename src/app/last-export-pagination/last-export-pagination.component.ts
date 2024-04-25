import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {HttpClient} from "@angular/common/http";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-last-export-pagination',
  templateUrl: './last-export-pagination.component.html',
  styleUrls: ['./last-export-pagination.component.css']
})
export class LastExportPaginationComponent implements OnInit {
  id= this.routes.snapshot.params['page']
  no:number
  roleOfUser = this.auth.getUserRoles();
  page=this.routes.snapshot.params['page']
  pageLength: any;
  showExports: any;
  size: number = 1;
  paths: string[];
  numbers: any = [];
  isHasResponse:boolean;
  isHasUrgent:boolean;
  isHasSpecial:boolean;
  showExport = new FormGroup({
    createdBy:new FormControl(''),
    recipientDate:new FormControl(''),
    date: new FormControl(''),
    receiver: new FormControl(''),
    numberOfAttachments: new FormControl(''),
    no: new FormControl(''),
    num: new FormControl(''),
    recipientName: new FormControl(''),
    summary: new FormControl(''),
    urgentDate: new FormControl(''),
    urgentNum: new FormControl(''),
    responseDate: new FormControl(''),
    responseNumber: new FormControl(''),
  });

  ngOnInit(): void {
    this.getExportCount();
    this.showExportFile();
    this.form();
  }

  form(){
    this.serviceExport.getExportsById(this.page).subscribe((result) => {
      this.showExport.patchValue({
        date: result['date'],
        recipientDate:result['recipientDate'],
        createdBy: result['createdBy'],
        receiver: result['receiver'],
        numberOfAttachments: result['numberOfAttachments'],
        no: result['no'],
        num: result['num'],
        recipientName: result['recipientName'],
        summary: result['summary'],
        urgentDate: result['urgentDate'],
        urgentNum: result['urgentNum'],
        responseDate: result['responseDate'],
        responseNumber: result['responseNumber']
      });
    });
  }
  constructor(
    private serviceExport: ExportServiceService,
    private http: HttpClient,
    private auth: AuthenticationServiceService,
    private routes: ActivatedRoute,

  ) {
  }

  showExportFile(): void {
    this.serviceExport.getExportsById(this.page).subscribe((getExport: any) => {
      this.showExports = getExport;
      this.paths = this.showExports.paths;
      this.id=this.showExports.id;
      this.isHasUrgent=this.showExports.hasUrgent;
      this.isHasResponse=this.showExports.hasResponse;
      this.isHasSpecial=this.showExports.hasSpecial
      this.no=this.showExports.no
    });
  }

  getExportCount(): void {
    this.serviceExport.getLastExportNumber().subscribe((numberOfExportFiles: any) => {
      this.pageLength = numberOfExportFiles;
    });
   }

  change(event): void {
    this.page = event;
    this.showExportFile();
    this.serviceExport.getExportById(event).subscribe((result) => {
      this.showExport = new FormGroup({
        date: new FormControl(result['date']),
        createdBy: new FormControl(result['createdBy']),
        receiver: new FormControl(result['receiver']),
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        no: new FormControl(result['no']),
        num: new FormControl(result['num']),
        recipientName: new FormControl(result['recipientName']),
        summary: new FormControl(result['summary']),
        urgentDate: new FormControl(result['urgentDate']),
        urgentNum: new FormControl(result['urgentNum']),
        responseDate: new FormControl(result['responseDate']),
        responseNumber: new FormControl(result['responseNumber']),
        recipientDate: new FormControl(result['recipientDate'])

      });
    });
  }



}

