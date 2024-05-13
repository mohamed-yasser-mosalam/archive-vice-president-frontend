import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PhoneDirectoryService} from "../../../Services/PhoneDirectory/phone-directory.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-employee-phone',
  templateUrl: './add-employee-phone.component.html',
  styleUrls: ['./add-employee-phone.component.css']
})
export class AddEmployeePhoneComponent implements OnInit{

  teachingForm: FormGroup;


  constructor(private phoneDirectoryService: PhoneDirectoryService, private router: Router,
              private fb: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {
    this.teachingForm = this.fb.group({
      serial: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      job: [''],
      department: [''],
      phone: [''],
      mobile: [''],
      address: [''],
      email: [''],
      notes: [''],

    });
  }

  addEmployeePhone(data: any) {
    this.phoneDirectoryService.addEmployeePhoneDirectory(data).subscribe(() => {
      window.location.reload();
    });
  }

  onSubmit(): void {
    if (this.teachingForm.valid) {
      this.addEmployeePhone(this.teachingForm.value);
    }
  }

}
