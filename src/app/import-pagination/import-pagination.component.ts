import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import baseUrl from "../url";

@Component({
  selector: 'app-import-pagination',
  templateUrl: './import-pagination.component.html',
  styleUrls: ['./import-pagination.component.css']
})
export class ImportPaginationComponent implements OnInit {
  pathOfDeleteImage:any;
  base=baseUrl+'/'
  id: any;
  no:number
  page = this.routes.snapshot.params['page']
  pageLength: any;
  showImports: any;
  size: number = 1;
  paths: string[];
  isHasResponse:boolean;
  isHasSpecial:boolean;
  roleOfUser = this.auth.getUserRoles()
  showImport = new FormGroup({
    createdBy:new FormControl(''),
    numberOfAttachments: new FormControl(''),
    sender: new FormControl(''),
    incomeDate: new FormControl(''),
    no: new FormControl(''),
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
    this.form()
  }

  form() {
    this.importService.getImportPagination(this.page).subscribe((result) => {
      this.showImport.patchValue({
        createdBy :result['createdBy'],
        numberOfAttachments :result['numberOfAttachments'],
        sender:result['sender'],
        incomeDate: result['incomeDate'],
        no: result['no'],
        incomingLetterDate: result['incomingLetterDate'],
        incomingLetterNumber:  result['incomingLetterNumber'],
        summary:  result['summary'],
        recipientDate: result['recipientDate'],
        responseDate: result['responseDate'],
        responseSide:  result['responseSide'],
        responseNumber: result['responseNumber'],
        recipientName:  result['recipientName'],
        num:  result['num'],
        expectResponseDate:  result['expectResponseDate']
      })
     })
  }

  constructor(private importService: ImportServiceService, private routes: ActivatedRoute, private router: Router,
              private http: HttpClient, private auth: AuthenticationServiceService) {
  }

  showImportFile() {
    this.importService.getImportPagination(this.page).subscribe((getImport: any) => {
      this.showImports = getImport;
      this.paths = this.showImports.paths.map((path: string) => {
        return this.base + path;
      });
      this.pathOfDeleteImage=this.showImports.paths
       this.id=this.showImports.id
      this.isHasResponse=this.showImports.hasResponse;
      this.isHasSpecial=this.showImports.hasSpecial
      this.no=this.showImports.no
    });
    }

  getImportCount() {
    this.importService.getImportNumber().subscribe((numberOfImportFiles: any) => {
      this.pageLength = numberOfImportFiles;
    })
  }

  change(event) {
    this.page = event;
    this.showImportFile();
    this.importService.getImportPagination(event).subscribe((result) => {
      this.showImport = new FormGroup({
        createdBy: new FormControl(result['createdBy']),
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        sender: new FormControl(result['sender']),
        incomeDate: new FormControl(result['incomeDate']),
        no: new FormControl(result['no']),
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
    const nextPageUrl = `/import_pagination/${this.page}`;
    this.router.navigate([nextPageUrl]);
    this.form();
  }

  deleteImage(index: number): void {
    this.importService.deleteImage(this.pathOfDeleteImage,index).subscribe();
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

    this.importService.addImages(this.id, formData).subscribe(() => {
     });
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }
}
