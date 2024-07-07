import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {ExportServiceService} from "../../../Services/ExportsServices/export-service.service";
import {AuthenticationServiceService} from "../../../Services/Security/authentication-service.service";

@Component({
  selector: 'app-add-export',
  templateUrl: './add-export.component.html',
  styleUrls: ['./add-export.component.css']
})
export class AddExportComponent implements OnInit {
  numberOfExportFile: any;
  exportForm: FormGroup;
  roleOfUser = this.auth.getUserRoles()


  constructor(private exportService: ExportServiceService, private router: Router,
              private fb: FormBuilder, private auth: AuthenticationServiceService) {}
  ngOnInit(): void {
    this.getExportCount();
    this.exportForm = this.fb.group({
      receiver: ['', [Validators.required, Validators.minLength(4)]],
      summary: ['', [Validators.required, Validators.minLength(4)]],
      date: ['', [Validators.required, Validators.minLength(4)]],
      no: [''],
      recipientName: [''],
      num: ['', [Validators.required, Validators.minLength(1)]],
      numberOfAttachments: ['', [Validators.required, Validators.minLength(1)]],
      recipientDate: [''],
    });
  }

  addExportFile(data: any) {
    this.exportService.addExportFile(data).subscribe(() => {
      window.location.reload();
    });
  }

  getExportCount(): void {
    this.exportService.getExportNumber().subscribe((numberOfExportFiles: any) => {
      this.numberOfExportFile = numberOfExportFiles + 1;
    });
  }

  onSubmit(): void {
    if (this.exportForm.valid) {
      this.addExportFile(this.exportForm.value);
    }
  }

}
