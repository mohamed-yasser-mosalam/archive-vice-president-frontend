import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExportServiceService} from "../../../Services/ExportsServices/export-service.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MandateService} from "../../../Services/mandate/mandate.service";

@Component({
  selector: 'app-add-mandate',
  templateUrl: './add-mandate.component.html',
  styleUrls: ['./add-mandate.component.css']
})
export class AddMandateComponent implements OnInit {
  numberOfMandate: any;
  exportForm: FormGroup;


  constructor(private mandateService: MandateService, private router: Router,
              private fb: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {
    this.getMandateCount();
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
    this.mandateService.addMandate(data).subscribe(() => {
      window.location.reload();
    });
  }

  getMandateCount(): void {
    this.mandateService.getAllMandateNumbers().subscribe((numberOfMandate: any) => {
      this.numberOfMandate = numberOfMandate + 1;
    });
  }

  onSubmit(): void {
    if (this.exportForm.valid) {
      this.addExportFile(this.exportForm.value);
    }
  }
}
