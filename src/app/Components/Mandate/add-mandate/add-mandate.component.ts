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
  deputationDays: number[] = [];

  constructor(private formBuilder: FormBuilder, private mandateService: MandateService) {
    this.mandateForm = this.formBuilder.group({
      department: ['', Validators.required],
      name: ['', Validators.required],
      degree: ['', Validators.required],
      deputationUniversity: ['', Validators.required],
      deputationPeriod: ['', Validators.required],
      deputationDays: [[], Validators.required],
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

  onWeekdayChange(event: any, day: number) {
    if (event.target.checked) {
      this.deputationDays.push(day);
    } else {
      // const index = this.deputationDays.indexOf(day);
      // if (index > -1) {
      //   this.deputationDays.splice(index, 1);
      // }
    }
    this.mandateForm.get('deputationDays')?.setValue(this.deputationDays);
  }

  onSubmit() {
    if (this.mandateForm.valid) {
      const formData = this.mandateForm.value;
      this.mandateService.addMandate(formData).subscribe(response => {
        // Handle response
      });
      console.log(formData);
    }
  }
}
