import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import baseUrl from "../../../url";
import { ExportServiceService } from "../../../Services/ExportsServices/export-service.service";
import { AuthenticationServiceService } from "../../../Services/Security/authentication-service.service";

@Component({
  selector: 'app-export-pagination',
  templateUrl: './export-pagination.component.html',
  styleUrls: ['./export-pagination.component.css']
})
export class ExportPaginationComponent implements OnInit {
  pathOfDeleteImage: any;
  id: number;
  base = baseUrl + '/';
  no: number;
  roleOfUser = this.auth.getUserRoles();
  page = this.routes.snapshot.params['page']
  pageLength: number;
  showExports: any;
  size: number = 1;
  paths: string[];
  numbers: any = [];
  isHasResponse: boolean;
  isHasUrgent: boolean;
  isHasSpecial: boolean;
  showExport = new FormGroup({
    createdBy: new FormControl(''),
    recipientDate: new FormControl(''),
    date: new FormControl(''),
    receiver: new FormControl(''),
    numberOfAttachments: new FormControl(''),
    numberOfImages: new FormControl(''),
    no: new FormControl(''),
    num: new FormControl(''),
    recipientName: new FormControl(''),
    summary: new FormControl(''),
    urgentDate: new FormControl(''),
    urgentNum: new FormControl(''),
    responseDate: new FormControl(''),
    responseNumber: new FormControl(''),
  });

  constructor(
    private exportService: ExportServiceService,
    private auth: AuthenticationServiceService,
    private routes: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCollectionSize();
    this.getExportCount();
    this.showExportFile();
    this.form();
  }

  loadCollectionSize() {
    const savedSize = localStorage.getItem('collectionSize');
    if (savedSize) {
      this.pageLength = parseInt(savedSize, 10);
    }
  }

  saveCollectionSize(size: number) {
    localStorage.setItem('collectionSize', size.toString());
  }

  form() {
    this.exportService.getExportByPagination(this.page).subscribe((result) => {
      this.showExport.patchValue({
        date: result['date'],
        recipientDate: result['recipientDate'],
        createdBy: result['createdBy'],
        receiver: result['receiver'],
        numberOfAttachments: result['numberOfAttachments'],
        numberOfImages: result['numberOfImages'],
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

  showExportFile(): void {
    this.exportService.getExportByPagination(this.page).subscribe((getExport: any) => {
      this.showExports = getExport;
      this.paths = this.showExports.paths.map((path: string) => {
        return this.base + path;
      });
      this.id = this.showExports.id;
      this.isHasUrgent = this.showExports.hasUrgent;
      this.isHasResponse = this.showExports.hasResponse;
      this.isHasSpecial = this.showExports.hasSpecial;
      this.no = this.showExports.no;
      this.pathOfDeleteImage = this.showExports.paths;
    });
  }

  getExportCount(): void {
    this.exportService.getExportNumber().subscribe((numberOfExportFiles: any) => {
      this.pageLength = numberOfExportFiles;
      this.saveCollectionSize(this.pageLength);
    });
  }

  change(event: any): void {
    this.page = event;
    this.showExportFile();
    this.exportService.getExportByPagination(event).subscribe((result) => {
      this.showExport = new FormGroup({
        date: new FormControl(result['date']),
        createdBy: new FormControl(result['createdBy']),
        receiver: new FormControl(result['receiver']),
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        numberOfImages: new FormControl(result['numberOfImages']),
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
    const nextPageUrl = `/export-pagination?page=/${this.page}`;
    this.router.navigate([nextPageUrl]);
    this.form();
  }

  deleteImage(index: number): void {
    this.exportService.deleteImage(this.pathOfDeleteImage, index).subscribe();
    this.paths.splice(index, 1);
    setTimeout(() => {
      window.location.reload();
    }, 50);
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
    this.exportService.addImages(this.id, formData).subscribe(() => {});
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }
}
