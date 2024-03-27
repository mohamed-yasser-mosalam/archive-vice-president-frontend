import {Component, OnInit} from '@angular/core';
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-respons-export',
  templateUrl: './respons-export.component.html',
  styleUrls: ['./respons-export.component.css']
})
export class ResponsExportComponent implements OnInit {
  x = this.routes.snapshot.params['id'];
  numberOfImportFile: any;
  addExportResponse: FormGroup

  constructor(
    private fb: FormBuilder,
    private serviceExport: ExportServiceService,
    private routes: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getImportCount();
    this.addExportResponse = this.fb.group({
      no: [''],
      sender: ['', [Validators.required, Validators.minLength(4)]],
      numberOfAttachments: ['',[Validators.required,]],
      incomeDate: ['', [Validators.required]],
      incomingLetterDate: ['',  ],
      incomingLetterNumber: ['' ],
      summary: ['', [Validators.required, Validators.minLength(4)]],
      recipientDate: [''],
      recipientName: [''],
      num: ['', [Validators.required, Validators.minLength(1)]],
      expectResponseDate: [''],
    });
  }

  addResponse(data: any): void {
    this.serviceExport.addExportResponse(this.routes.snapshot.params['id'], data).subscribe(
      () => this.router.navigateByUrl('/getallImports'),
    );
  }

  getImportCount(): void {
    this.http.get('http://localhost:1200/import/count').subscribe((numberOfImportFiles: any) => {
      this.numberOfImportFile = numberOfImportFiles + 1;
    });
  }

  onSubmit(): void {
    if (this.addExportResponse.valid) {
      this.addResponse(this.addExportResponse.value);
    }
  }
}
