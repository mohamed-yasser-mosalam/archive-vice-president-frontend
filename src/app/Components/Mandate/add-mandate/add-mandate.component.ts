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
  deputationDaysIds: number[] = [];

  constructor(private formBuilder: FormBuilder, private mandateService: MandateService) {
    this.mandateForm = this.formBuilder.group({
      department: ['', Validators.required],
      name: ['', Validators.required],
      degree: ['', Validators.required],
      deputationUniversity: ['', Validators.required],
      deputationPeriod: ['', Validators.required],
      deputationDaysIds: [[], Validators.required],
      departmentAccept: ['', Validators.required],
      departmentDate: ['', Validators.required],
      departmentRecordNum: ['', Validators.required],
      facultyRecordNum: ['', Validators.required],
      facultyDate: ['', Validators.required],
      facultyAccept: ['', Validators.required],
      universityAccept: ['', Validators.required],
      universityDate: ['', Validators.required],
      universityRecordNum: ['', Validators.required],
      notes: ['']
    });
  }

  ngOnInit() {}

  onWeekdayChange(event: any, day: number) {
    if (event.target.checked) {
      this.deputationDaysIds.push(day);
    }
    this.mandateForm.get('deputationDaysIds')?.setValue(this.deputationDaysIds);
  }

  onSubmit() {
    if (this.mandateForm.valid) {
      const formData = this.mandateForm.value;
      this.mandateService.addMandate(formData).subscribe(response => {
      });
      console.log(formData);
    }
  }
}
