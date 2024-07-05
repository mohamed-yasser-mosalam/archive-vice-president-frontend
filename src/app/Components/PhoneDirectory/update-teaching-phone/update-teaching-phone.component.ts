import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ExportServiceService} from "../../../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import baseUrl from "../../../url";
import {AuthenticationServiceService} from "../../../Services/Security/authentication-service.service";
import {PhoneDirectoryService} from "../../../Services/PhoneDirectory/phone-directory.service";

@Component({
  selector: 'app-update-teaching-phone',

  templateUrl: './update-teaching-phone.component.html',
  styleUrls: ['./update-teaching-phone.component.css']
})
export class UpdateTeachingPhoneComponent implements OnInit {
  base = baseUrl + '/'
  showTeachingPhone: any;
  id = this.routes.snapshot.params['id']
  no: number;
  editTeachingPhone = new FormGroup({
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
    this.teachingPhoneService.showTeachingPhoneDirectoryById(this.id).subscribe((result) => {
      this.editTeachingPhone = new FormGroup({
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
    console.log(this.editTeachingPhone)
  }

  constructor(private teachingPhoneService: PhoneDirectoryService, private routes: ActivatedRoute, private router: Router,
  ) {
  }

  update() {
    this.teachingPhoneService.updateTeachingPhoneDirectory(this.id, this.editTeachingPhone.value)
      .subscribe(() => {
        this.router.navigate([`/teaching-phone-directly`])
      })
  }



}
