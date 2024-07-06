import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ExportServiceService} from "../../../Services/ExportsServices/export-service.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-urgent-export',
  templateUrl: './urgent-export.component.html',
  styleUrls: ['./urgent-export.component.css']
})
export class UrgentExportComponent  implements OnInit{
  numberOfExportFile:any
  id=this.routes.snapshot.params['id']
  urgentForm = this.fb.group({
    receiver: ['', [Validators.required, Validators.minLength(4)]],
    summary: ['', [Validators.required, Validators.minLength(4)]],
    date: ['', [Validators.required, Validators.minLength(4)]],
    no: [''],
    recipientName: [''],
    num: ['', [Validators.required, Validators.minLength(1)]],
    numberOfAttachments: ['', [Validators.required, Validators.minLength(1)]],
  });

  ngOnInit(): void {
    this.getExportCount()
      this.urgentForm
  }
  constructor(private exportService: ExportServiceService,private routes: ActivatedRoute,
              private router: Router,private http:HttpClient,
              private fb: FormBuilder) {

  }

  addUrgentFile(data:any) {
    this.exportService.addUrgentFile(this.id,data).subscribe(
      response => this.router.navigate([`/get-all-exports`])
      // response => this.router.navigateByUrl('/home')

    )
  }
  getExportCount(): void {
    this.exportService.getExportNumber().subscribe((numberOfExportFiles: any) => {
      this.numberOfExportFile = numberOfExportFiles+1;
    });
  }
  onSubmit(): void {
    if (this.urgentForm.valid) {
      this.addUrgentFile(this.urgentForm.value);
    }
  }
}
