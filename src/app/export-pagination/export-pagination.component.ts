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
    numberOfAttachments:new FormControl(' '),
    receiver: new FormControl(''),
    summary: new FormControl(''),
    recipientName: new FormControl(''),
    num: new FormControl()

  })
  ngOnInit(): void {
    this.getExportCount();
    this.showExportFile();
     this.serviceExport.getExportById(this.routes.snapshot.params['id']).
     subscribe((result) => {
      this.showExport = new FormGroup({
        date:new FormControl(result['date']),
        numberOfAttachments:new FormControl(result['numberOfAttachments']),
        receiver: new FormControl(result['receiver']),
        summary: new FormControl(result['summary']),
        recipientName: new FormControl(result['recipientName']),
        num: new FormControl(result['num'])
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
        numberOfAttachments:new FormControl(result['numberOfAttachments']),
        receiver: new FormControl(result['receiver']),
        summary: new FormControl(result['summary']),
        recipientName: new FormControl(result['recipientName']),
        num: new FormControl(result['num'])
      })
    })

   }
}
