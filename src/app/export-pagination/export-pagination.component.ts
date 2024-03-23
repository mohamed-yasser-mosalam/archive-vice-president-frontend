import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";

@Component({
  selector: 'app-export-pagination',
  templateUrl: './export-pagination.component.html',
  styleUrls: ['./export-pagination.component.css']
})
export class ExportPaginationComponent implements OnInit {
  id: number;
  roleOfUser = this.auth.getUserRoles();
  page=this.routes.snapshot.params['page']
  pageLength: any;
  showExports: any;
  size: number = 1;
  paths: string[];
  numbers: any = [];
  hasResponse:boolean;
  hasUrgent:boolean
  showExport = new FormGroup({
    createdBy:new FormControl(''),
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
    this.serviceExport.getExportByPagination(this.page).subscribe((result) => {
      this.showExport.patchValue({
        date: result['date'],
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
    this.serviceExport.getExportByPagination(this.page).subscribe((getExport: any) => {
      this.showExports = getExport;
      this.paths = this.showExports.paths;
      this.id=this.showExports.id;
      this.hasUrgent=this.showExports.hasUrgent;
      this.hasResponse=this.showExports.hasResponse
     });
  }

  getExportCount(): void {
    this.http.get('http://localhost:1200/export/count').subscribe((numberOfExportFiles: any) => {
      this.pageLength = numberOfExportFiles;
    });
  }

  change(event): void {
    this.page = event;
    this.showExportFile();
    this.serviceExport.getExportByPagination(event).subscribe((result) => {
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
        responseNumber: new FormControl(result['responseNumber'])
      });
    });
   }

  deleteImage(index: number): void {
    this.http.delete(`http://localhost:1200/image/image?imagePath=${this.paths[index]}`).subscribe();
    this.paths.splice(index, 1);
  }
  selectedFiles: File[] = [];

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i);
        if (file) {
          this.selectedFiles.push(file);
        }
      }
    }
  }
  onSubmit(): void {
    const formData: FormData = new FormData();
    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append('files', this.selectedFiles[i]);
    }

    this.http.post<any>(`http://localhost:1200/image/multipleFiles?id=${this.id}&pathType=exports`, formData).subscribe(() => {
    });
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }


}

