import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";

@Component({
  selector: 'app-import-pagination',
  templateUrl: './import-pagination.component.html',
  styleUrls: ['./import-pagination.component.css']
})
export class ImportPaginationComponent implements OnInit {
  x: any
  page = this.routes.snapshot.params['id'];
  pageLength: any;
  showImports: any;
  size: number = 1;
  paths: string[];
  urls = new Array<string>();
  roleOfUser = this.auth.getUserRoles()
  showImport = new FormGroup({
    numberOfAttachments: new FormControl(''),
    sender: new FormControl(''),
    incomeDate: new FormControl(''),
    id: new FormControl(''),
    incomingLetterDate: new FormControl(''),
    incomingLetterNumber: new FormControl(''),
    summary: new FormControl(' '),
    recipientDate: new FormControl(''),
    responseDate: new FormControl(''),
    responseSide: new FormControl(''),
    responseNumber: new FormControl(''),
    recipientName: new FormControl(''),
    num: new FormControl(''),
    expectResponseDate: new FormControl('')

  })

  ngOnInit(): void {
    this.getImportCount();
    this.showImportFile();
    this.importService.getImportById(this.routes.snapshot.params['id']).subscribe((result) => {
      this.showImport = new FormGroup({
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        sender: new FormControl(result['sender']),
        incomeDate: new FormControl(result['incomeDate']),
        id: new FormControl(result['id']),
        incomingLetterDate: new FormControl(result['incomingLetterDate']),
        incomingLetterNumber: new FormControl(result['incomingLetterNumber']),
        summary: new FormControl(result['summary']),
        recipientDate: new FormControl(result['recipientDate']),
        responseDate: new FormControl(result['responseDate']),
        responseSide: new FormControl(result['responseSide']),
        responseNumber: new FormControl(result['responseNumber']),
        recipientName: new FormControl(result['recipientName']),
        num: new FormControl(result['num']),
        expectResponseDate: new FormControl(result['expectResponseDate'])
      })
    })
  }

  constructor(private importService: ImportServiceService, private routes: ActivatedRoute, private router: Router,
              private http: HttpClient, private auth: AuthenticationServiceService) {
  }

  showImportFile() {
    this.importService.getImportById(this.page).subscribe((getImport: any) => {
      this.showImports = getImport;
      this.paths = this.showImports.paths

    })
  }

  getImportCount() {
    this.http.get('http://localhost:1200/import/count').subscribe((numberOfImportFiles: any) => {
      this.pageLength = numberOfImportFiles;
    })
  }

  change() {
    this.page;
    this.showImportFile();
    this.importService.getImportById(this.page).subscribe((result) => {
      this.showImport = new FormGroup({
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        sender: new FormControl(result['sender']),
        incomeDate: new FormControl(result['incomeDate']),
        id: new FormControl(result['id']),
        incomingLetterDate: new FormControl(result['incomingLetterDate']),
        incomingLetterNumber: new FormControl(result['incomingLetterNumber']),
        summary: new FormControl(result['summary']),
        responseSide: new FormControl(result['responseSide']),
        recipientDate: new FormControl(result['recipientDate']),
        responseDate: new FormControl(result['responseDate']),
        responseNumber: new FormControl(result['responseNumber']),
        recipientName: new FormControl(result['recipientName']),
        num: new FormControl(result['num']),
        expectResponseDate: new FormControl(result['expectResponseDate']),


      })
    })
  }

  deleteImage(index: number): void {
    this.http.delete(`http://localhost:1200/image/image?imagePath=${this.paths[index]}`).subscribe()
    this.paths.splice(index, 1);
   }

  onImageSelected(event) {
    const files: FileList = event.target.files;
    const formData: FormData = new FormData();

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        formData.append('files', file);
      }
    }

    this.http.post(`http://localhost:1200/image/multipleFiles?id=${this.page}&pathType=imports`, formData).subscribe(
      (result) => {
        // Handle success response
        console.log('Upload successful:', result);
         this.showImportFile();
      },
      (error) => {
         console.error('Upload failed:', error);
      }
    );
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

    this.http.post<any>(`http://localhost:1200/image/multipleFiles?id=${this.page}&pathType=imports`, formData).subscribe(
      response => {
        console.log('Upload successful:', response);
      },
      error => {
        console.error('Upload failed:', error);
      }
    );
  }
}
