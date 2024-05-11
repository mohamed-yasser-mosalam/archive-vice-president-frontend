import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PhoneDirectoryService} from "../../../Services/PhoneDirectory/phone-directory.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-teaching-phone',
  templateUrl: './add-teaching-phone.component.html',
  styleUrls: ['./add-teaching-phone.component.css']
})
export class AddTeachingPhoneComponent implements OnInit {
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

  addFacultyPhone(data: any) {
    this.phoneDirectoryService.addTeachingPhoneDirectory(data).subscribe(() => {
      window.location.reload();
    });
  }

  onSubmit(): void {
    if (this.teachingForm.valid) {
      this.addFacultyPhone(this.teachingForm.value);
    }
  }
}
