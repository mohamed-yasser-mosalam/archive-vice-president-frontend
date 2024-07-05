import {Component, OnInit} from '@angular/core';
import baseUrl from "../../../url";
import {FormControl, FormGroup} from "@angular/forms";
import {PhoneDirectoryService} from "../../../Services/PhoneDirectory/phone-directory.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-employee-phone',
  templateUrl: './update-employee-phone.component.html',
  styleUrls: ['./update-employee-phone.component.css']
})
export class UpdateEmployeePhoneComponent implements OnInit {
  base = baseUrl + '/'
  showTeachingPhone: any;
  id = this.routes.snapshot.params['id']
  no: number;
  editEmployeePhone = new FormGroup({
    id: new FormControl(''),
    serial: new FormControl(''),
    name: new FormControl(''),
    job: new FormControl(''),
    department: new FormControl(''),
    phone: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    notes: new FormControl(''),
  })

  ngOnInit(): void {
    this.teachingPhoneService.showEmployeePhoneDirectoryById(this.id).subscribe((result) => {
      this.editEmployeePhone = new FormGroup({
        id: new FormControl(result['id']),
        serial: new FormControl(result['serial']),
        name: new FormControl(result['name']),
        job: new FormControl(result['job']),
        department: new FormControl(result['department']),
        phone: new FormControl(result['phone']),
        mobile: new FormControl(result['mobile']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email']),
        notes: new FormControl(result['notes']),
      })
    })
    console.log(this.editEmployeePhone)
  }

  constructor(private teachingPhoneService: PhoneDirectoryService, private routes: ActivatedRoute, private router: Router,
  ) {
  }

  update() {
    this.teachingPhoneService.updateEmployeePhoneDirectory(this.id, this.editEmployeePhone.value)
      .subscribe(() => {
        this.router.navigate([`/employee-phone-directly`])
      })
  }

}
