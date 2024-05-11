import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {PhoneDirectoryService} from "../../../Services/PhoneDirectory/phone-directory.service";

@Component({
  selector: 'app-add-faculty-phone',
  templateUrl: './add-faculty-phone.component.html',
  styleUrls: ['./add-faculty-phone.component.css']
})
export class AddFacultyPhoneComponent implements OnInit {
  facultyForm: FormGroup;


  constructor(private phoneDirectoryService: PhoneDirectoryService, private router: Router,
              private fb: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {
    this.facultyForm = this.fb.group({
      serial: ['', [Validators.required]],
      side: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required]],
    });
  }

  addFacultyPhone(data: any) {
    this.phoneDirectoryService.addFacultyPhoneDirectory(data).subscribe(() => {
      window.location.reload();
    });
  }

  onSubmit(): void {
    if (this.facultyForm.valid) {
      this.addFacultyPhone(this.facultyForm.value);
    }
  }
}
