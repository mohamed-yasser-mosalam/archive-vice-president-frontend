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
  x: any;
  id: string;
  roleOfUser = this.auth.getUserRoles();
  page: any =1
  pageLength: any;
  showExports: any;
  size: number = 1;
  paths: string[];
  numbers: any = [];
  showExport = new FormGroup({
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
    this.serviceExport.getExportByPagination(this.page).subscribe((result) => {
      this.showExport = new FormGroup({
        date: new FormControl(result['date']),
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

  constructor(
    private serviceExport: ExportServiceService,
    private routes: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private auth: AuthenticationServiceService
  ) {
  }

  showExportFile(): void {
    this.serviceExport.getExportByPagination(this.page).subscribe((getExport: any) => {
      this.showExports = getExport;
      this.paths = this.showExports.paths;
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

    this.http.post<any>(`http://localhost:1200/image/multipleFiles?id=${this.page}&pathType=exports`, formData).subscribe(
      response => {
        console.log('Upload successful:', response);
      },
      error => {
        console.error('Upload failed:', error);
      }
    );
  }
}
