import {Component, numberAttribute, OnInit} from '@angular/core';
import {RegisterService} from "../Services/Register/register.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.registerService.createUser(this.registerForm.value).subscribe(
      response => this.router.navigateByUrl('/home'),
     );
  }
}
