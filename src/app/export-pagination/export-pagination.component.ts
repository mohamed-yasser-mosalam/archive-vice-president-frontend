import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {Showallexport} from "../Models/showAllExports/showallexport";

@Component({
  selector: 'app-export-pagination',
  templateUrl: './export-pagination.component.html',
  styleUrls: ['./export-pagination.component.css']
})
export class ExportPaginationComponent implements OnInit {
  x: any;
  y: any
  id: string;
  page = this.routes.snapshot.params['id'];
  pageLength: any;
  showExports: any;
  size: number = 1;
  paths: string[];
  numbers: any = [];
  localImg:any = [];
  showAttachments: Showallexport[] = [];
  showExport = new FormGroup({
    date: new FormControl(''),
    receiver: new FormControl(''),
    numberOfAttachments: new FormControl(''),
    id: new FormControl(''),
    num: new FormControl(''),
    recipientName: new FormControl(''),
    summary: new FormControl(''),
    urgentDate: new FormControl(''),
    urgentNum: new FormControl(''),
    responseDate: new FormControl(''),
    responseNumber: new FormControl(''),
  })

  ngOnInit(): void {
    this.localImg = [
      {id:0,name:"img0",url:'assets/exports/1-Screenshot 2024-01-27 215958.png'},
      {id:1,name:"img0",url:'assets/exports/1-Screenshot 2024-01-27 215958.png'},
      {id:2,name:"img0",url:'assets/exports/1-Screenshot 2024-01-27 215958.png'},
    ]
    this.getExportCount();
    this.showExportFile();
    this.serviceExport.getExportById(this.routes.snapshot.params['id']).subscribe((result) => {
      this.showExport = new FormGroup({
        date: new FormControl(result['date']),
        receiver: new FormControl(result['receiver']),
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        id: new FormControl(result['id']),
        num: new FormControl(result['num']),
        recipientName: new FormControl(result['recipientName']),
        summary: new FormControl(result['summary']),
        urgentDate: new FormControl(result['urgentDate']),
        urgentNum: new FormControl(result['urgentNum']),
        responseDate: new FormControl(result['responseDate']),
        responseNumber: new FormControl(result['responseNumber'])
      })
    })

  }

  constructor(private serviceExport: ExportServiceService, private routes: ActivatedRoute, private router: Router,
              private http: HttpClient,
              private auth: AuthenticationServiceService,
  ) {
  }

  showExportFile() {
    this.serviceExport.getExportById(this.page).subscribe((getExport: any) => {
      this.showExports = getExport;
      this.paths = this.showExports.paths
    })
  }

  getExportCount() {
    this.http.get('http://localhost:1200/export/count').subscribe((numberOfExportFiles: any) => {
      this.pageLength = numberOfExportFiles;
    })
  }

  change() {
    this.page;
    this.showExportFile();
    this.serviceExport.getExportById(this.page).subscribe((result) => {
      this.showExport = new FormGroup({
        date: new FormControl(result['date']),
        receiver: new FormControl(result['receiver']),
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        id: new FormControl(result['id']),
        num: new FormControl(result['num']),
        recipientName: new FormControl(result['recipientName']),
        summary: new FormControl(result['summary']),
        urgentDate: new FormControl(result['urgentDate']),
        urgentNum: new FormControl(result['urgentNum']),
        responseDate: new FormControl(result['responseDate']),
        responseNumber: new FormControl(result['responseNumber'])
      })
    })

  }

  onImageSelected(event) {
    const file = event.target.files[0]
    const formDate: FormData = new FormData()
    this.x = formDate.append("files", file)
    this.http.post(`http://localhost:1200/image/multipleFiles?id=${this.page}&pathType=exports`, formDate).subscribe(
      (result) => {
      })

  }
}
