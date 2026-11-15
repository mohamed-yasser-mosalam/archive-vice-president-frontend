import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../../../../Services/Register/register.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../Services/user/user.service";
import {AlertService} from "../../../../Services/alert/alert.service";
import {PermissionService} from "../../../../Services/Security/permission.service";
import {RoleService} from "../../../../Services/roles/role.service";
import {Role} from "../../../../Models/roles/role";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;
  formDate:any
  /** Only admins may choose the new user's role; others get the default role. */
  roles: Role[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private userService:UserService,
    private alert: AlertService,
    private perms: PermissionService,
    private roleService: RoleService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      phone:[''],
      roleId: [null]
    });
    if (this.perms.isAdmin())
      this.roleService.list().subscribe(r => this.roles = r);
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.registerService.createUser(this.registerForm.value).subscribe(
      response => this.router.navigateByUrl('/home'),
      error => this.alert.error(error)
     );
  }

}
