import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MandateService} from "../../../Services/mandate/mandate.service";
import {Mandate} from "../../../Models/mandate/mandate";

@Component({
  selector: 'app-update-mandate',
  templateUrl: './update-mandate.component.html',
  styleUrls: ['./update-mandate.component.css']
})
export class UpdateMandateComponent implements OnInit {
  updateMandateForm: FormGroup;
  deputationDaysIds: number[] = [];
  departmentAccept:number;
  universityAccept:number;
  facultyAccept:number;
  deputationPeriod:number

  constructor(
    private formBuilder: FormBuilder,
    private mandateService: MandateService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.updateMandateForm = this.formBuilder.group({
      department: ['', Validators.required],
      name: ['', Validators.required],
      degree: ['', Validators.required],
      deputationUniversity: ['', Validators.required],
      deputationPeriod: ['', Validators.required],
      deputationDaysIds: [[], Validators.required],
      departmentAccept: ['', Validators.required],
      departmentDate: ['', Validators.required],
      departmentRecordNum: ['', Validators.required],
      departmentSpecialNum:[''],
      facultyRecordNum: [''],
      facultyDate:[''],
      facultyAccept:[''],
      facultySpecialNum:[''],
      universityAccept: [''],
      universityDate: [''],
      universityRecordNum: [''],
      notes: ['']
    });
  }
    ngOnInit() {
    const mandateId = this.route.snapshot.params['id'];
    if (mandateId) {
      this.mandateService.getMandateById(mandateId).subscribe((data: any) => {
        this.updateMandateForm.patchValue(data);
        this.deputationDaysIds = data.deputationDaysIds;
        this.departmentAccept=data.departmentAccept;
        this.facultyAccept=data.facultyAccept;
        this.universityAccept=data.universityAccept;
        this.deputationPeriod=data.deputationPeriod
      });
    }
  }

  onWeekdayChange(event: any, day: number) {
    if (event.target.checked) {
      this.deputationDaysIds.push(day);
    } else {
      this.deputationDaysIds = this.deputationDaysIds.filter(d => d !== day);
    }
    this.updateMandateForm.get('deputationDaysIds')?.setValue(this.deputationDaysIds);
  }

  onSubmit() {
    if (this.updateMandateForm.valid) {
      const formData: Mandate = this.updateMandateForm.value;
      this.mandateService.updateMandate(this.route.snapshot.params['id'], formData).subscribe(result => {
        this.router.navigateByUrl('/all-mandate');
      });
    }
  }
}
