import {Component, OnInit} from '@angular/core';
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-urgent-export',
  templateUrl: './urgent-export.component.html',
  styleUrls: ['./urgent-export.component.css']
})
export class UrgentExportComponent  implements OnInit{
  numberOfExportFile:any
  x=this.routes.snapshot.params['id']
  urgentForm = this.fb.group({
    receiver: ['', [Validators.required, Validators.minLength(4)]],
    summary: ['', [Validators.required, Validators.minLength(4)]],
    date: ['', [Validators.required, Validators.minLength(4)]],
    no: [''],
    recipientName: [''],
    num: ['', [Validators.required, Validators.minLength(1)]],
    numberOfAttachments: ['', [Validators.required, Validators.minLength(1)]]
  });

  ngOnInit(): void {
    this.getExportCount()
      this.urgentForm
  }
  constructor(private serviceExport: ExportServiceService,private routes: ActivatedRoute,
              private router: Router,private http:HttpClient,
              private fb: FormBuilder) {

  }

  addUrgentFile(data:any) {
    this.serviceExport.addUrgentFile(this.routes.snapshot.params['id'],data).subscribe(
      // response => this.router.navigate([`/export-pagination?id/`,this.x])
      response => this.router.navigateByUrl('/home')

    )
  }
  getExportCount(): void {
    this.http.get('http://localhost:1200/export/count').subscribe((numberOfExportFiles: any) => {
      this.numberOfExportFile = numberOfExportFiles+1;
    });
  }
  onSubmit(): void {
    if (this.urgentForm.valid) {
      this.addUrgentFile(this.urgentForm.value);
    }
  }
}
