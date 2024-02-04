import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-export-pagination',
  templateUrl: './export-pagination.component.html',
  styleUrls: ['./export-pagination.component.css']
})
export class ExportPaginationComponent implements OnInit{
  page=this.routes.snapshot.params['id'];
  pageLength: any;
  showExports: any;
  size:number=1;
   showExport = new FormGroup({
     date:new FormControl(''),
     receiver: new FormControl(''),
     numberOfAttachments:new FormControl(''),
     id: new FormControl(''),
     recipientName: new FormControl(''),
     summary: new FormControl(''),
     urgentDate: new FormControl(''),
     urgentNum:new FormControl( ''),
     responseDate: new FormControl(''),
     responseNumber: new FormControl(''),
  })
  ngOnInit(): void {
    this.getExportCount();
    this.showExportFile();
     this.serviceExport.getExportById(this.routes.snapshot.params['id']).
     subscribe((result) => {
      this.showExport = new FormGroup({
        date:new FormControl(result['date']),
        receiver: new FormControl(result['receiver']),
        numberOfAttachments:new FormControl(result['numberOfAttachments']),
        id: new FormControl(result['id']),
        recipientName: new FormControl(result['recipientName']),
        summary: new FormControl(result['summary']),
        urgentDate: new FormControl(result['urgentDate']),
        urgentNum:new FormControl( result['urgentNum']),
        responseDate: new FormControl(result['responseDate']),
        responseNumber: new FormControl(result['responseNumber'])
      })
    })

     }

  constructor(private serviceExport: ExportServiceService, private routes: ActivatedRoute, private router: Router,
              private http:HttpClient) {
  }

  showExportFile() {
    this.serviceExport.getExportById(this.page).subscribe((getExport:any)=>{
      this.showExports=getExport;
    })
  }

  getExportCount() {
    this.http.get('http://localhost:1200/export/count').subscribe((numberOfExportFiles:any) => {
      this.pageLength = numberOfExportFiles;
    })
  }

  change(){
     this.page;
     this.showExportFile();
    this.serviceExport.getExportById(this.page).
    subscribe((result) => {
      this.showExport = new FormGroup({
        date:new FormControl(result['date']),
        receiver: new FormControl(result['receiver']),
        numberOfAttachments:new FormControl(result['numberOfAttachments']),
        id: new FormControl(result['id']),
        recipientName: new FormControl(result['recipientName']),
        summary: new FormControl(result['summary']),
        urgentDate: new FormControl(result['urgentDate']),
        urgentNum:new FormControl( result['urgentNum']),
        responseDate: new FormControl(result['responseDate']),
        responseNumber: new FormControl(result['responseNumber'])
      })
    })

   }
}
