import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MandateService } from '../../../Services/mandate/mandate.service';

@Component({
  selector: 'app-add-mandate',
  templateUrl: './add-mandate.component.html',
  styleUrls: ['./add-mandate.component.css']
})
export class AddMandateComponent implements OnInit {
  mandateForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private mandateService: MandateService) {
    this.mandateForm = this.formBuilder.group({
      department: ['', Validators.required],
      name: ['', Validators.required],
      degree: ['', Validators.required],
      deputationUniversity: ['', Validators.required],
      deputationPeriod: ['', Validators.required],
      deputationDays: this.formBuilder.group({
         id:['']
      }),
      departmentAccept: ['', Validators.required],
      departmentDate: ['', Validators.required],
      departmentRecordNum: ['', Validators.required],
      facultyRecordAccepts: ['', Validators.required],
      facultyDate: ['', Validators.required],
      facultyNum: ['', Validators.required],
      universityAccept: ['', Validators.required],
      universityDate: ['', Validators.required],
      universityNumber: ['', Validators.required],
      notes: ['']
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.mandateForm.valid) {
      const formData = this.mandateForm.value;
      this.mandateService.addMandate(formData).subscribe(response => {}, );
      console.log( formData);
    }
  }
}
