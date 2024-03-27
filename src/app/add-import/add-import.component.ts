import { Component, OnInit } from '@angular/core';
import { ImportServiceService } from "../Services/ImportsServices/import-service.service";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-import',
  templateUrl: './add-import.component.html',
  styleUrls: ['./add-import.component.css']
})
export class AddImportComponent implements OnInit {
  numberOfImportFile: any;
  importForm: FormGroup;

  constructor(
    private serviceImport: ImportServiceService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getImportCount();
    this.importForm = this.fb.group({
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

  addImportFile(data: any): void {
    this.serviceImport.addImportFile(data).subscribe(() => {
      window.location.reload();
    })
  }

  getImportCount(): void {
    this.http.get('http://localhost:1200/import/count').subscribe((numberOfImportFiles: any) => {
      this.numberOfImportFile = numberOfImportFiles + 1;
    });
  }

  onSubmit(): void {
    if (this.importForm.valid) {
      this.addImportFile(this.importForm.value);
    }
  }
}
