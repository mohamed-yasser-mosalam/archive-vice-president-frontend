import {Component, OnInit} from '@angular/core';
import baseUrl from "../../../url";
import {FormControl, FormGroup} from "@angular/forms";
import {PhoneDirectoryService} from "../../../Services/PhoneDirectory/phone-directory.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-faculty-phone',

  templateUrl: './update-faculty-phone.component.html',
  styleUrls: ['./update-faculty-phone.component.css']
})
export class UpdateFacultyPhoneComponent implements OnInit {
  base = baseUrl + '/'
  showTeachingPhone: any;
  id = this.routes.snapshot.params['id']
  no: number;
  editFacultyPhone = new FormGroup({
    serial: new FormControl(''),
    side: new FormControl(''),
    phone: new FormControl(''),
  })

  ngOnInit(): void {
    this.facultyPhoneService.showFacultyPhoneDirectoryById(this.id).subscribe((result) => {
      this.editFacultyPhone = new FormGroup({
        serial: new FormControl(result['serial']),
        side: new FormControl(result['side']),
        phone: new FormControl(result['phone']),
      })
    })
  }

  constructor(private facultyPhoneService: PhoneDirectoryService, private routes: ActivatedRoute, private router: Router,
  ) {
  }

  update() {
    this.facultyPhoneService.updateFacultyPhoneDirectory(this.id, this.editFacultyPhone.value)
      .subscribe(() => {
        this.router.navigate([`/faculty-phone-directly`])
      })
  }

}
