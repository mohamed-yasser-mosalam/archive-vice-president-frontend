import { Component, OnInit } from '@angular/core';
import { ExportServiceService } from "../Services/ExportsServices/export-service.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-add-export',
  templateUrl: './add-export.component.html',
  styleUrls: ['./add-export.component.css']
})
export class AddExportComponent implements OnInit {
  numberOfExportFile: any;

  constructor(private serviceExport: ExportServiceService, private router: Router,
              private fb: FormBuilder, private http: HttpClient) {}

  exportForm: FormGroup;

  ngOnInit(): void {
    this.getExportCount();
    this.exportForm = this.fb.group({
      receiver: [''],
      summary: [''],
      date: [''],
      no: [''],
      recipientName: [''],
      num: [''],
      numberOfAttachments: ['']
    });
  }

  AddExportFile(data: any) {
    this.serviceExport.addExportFile(data).subscribe(() => {
      window.location.reload();
    });
  }

  getExportCount(): void {
    this.http.get('http://localhost:1200/export/count').subscribe((numberOfExportFiles: any) => {
      this.numberOfExportFile = numberOfExportFiles + 1;
    });
  }
}
