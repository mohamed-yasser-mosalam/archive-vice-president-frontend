import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ImportServiceService} from "../../../Services/ImportsServices/import-service.service";
import {ExportServiceService} from "../../../Services/ExportsServices/export-service.service";
import {AllFilesService} from "../../../Services/AllFile/all-files.service";

@Component({
  selector: 'app-respons-import',
  templateUrl: './respons-import.component.html',
  styleUrls: ['./respons-import.component.css']
})
export class ResponsImportComponent implements OnInit {
  numberOfExportFile: any;
  importResponse: FormGroup;
  allFiles: any
  id = this.routes.snapshot.params['id']
  addResponse = new FormGroup({
    receiver: new FormControl(''),
    summary: new FormControl(''),
    recipientName: new FormControl(''),
    num: new FormControl()
  })

  ngOnInit(): void {
    this.getExportArchive()
    this.getExportCount();
    this.importResponse = this.fb.group({
      receiver: ['', [Validators.required, Validators.minLength(4)]],
      summary: ['', [Validators.required, Validators.minLength(4)]],
      date: ['', [Validators.required, Validators.minLength(4)]],
      no: [''],
      recipientName: [''],
      num: ['', [Validators.required, Validators.minLength(1)]],
      numberOfAttachments: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  constructor(private serviceImport: ImportServiceService, private routes: ActivatedRoute, private router: Router,
              private http: HttpClient, private fb: FormBuilder, private exportService: ExportServiceService,
              private allFilesService: AllFilesService) {

  }


  addImportResponse(data: any) {
    this.serviceImport.addImportResponse(this.routes.snapshot.params['id'], data).subscribe(
      response => this.router.navigateByUrl('/get-all-exports')
    )
  }

  getExportCount(): void {
    this.exportService.getExportNumber().subscribe((numberOfExportFiles: any) => {
      this.numberOfExportFile = numberOfExportFiles + 1;
    });
  }

  getExportArchive(): void {
    this.allFilesService.getByType(2).subscribe((allFiles: any) => {
      this.allFiles = allFiles ;
    });
  }

  onSubmit(): void {
    if (this.importResponse.valid) {
      this.addImportResponse(this.importResponse.value);
    }
  }

}


