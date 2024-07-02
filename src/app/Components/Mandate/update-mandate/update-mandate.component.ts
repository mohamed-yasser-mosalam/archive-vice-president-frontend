// import {Component, OnInit} from '@angular/core';
// import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
// import {MandateService} from "../../../Services/mandate/mandate.service";
// import {ActivatedRoute, Router} from "@angular/router";
//
// @Component({
//   selector: 'app-update-mandate',
//   templateUrl: './update-mandate.component.html',
//   styleUrls: ['./update-mandate.component.css']
// })
// export class UpdateMandateComponent implements OnInit {
//   mandateForm: FormGroup;
//   deputationDaysIds: number[] = [];
//   id=this.routes.snapshot.params['id']
//   editMandate = new FormGroup({
//     department:  new FormControl(''),
//     name:  new FormControl(''),
//     degree:  new FormControl(''),
//     deputationUniversity:  new FormControl(''),
//     deputationPeriod: new FormControl(''),
//     deputationDaysIds:  new FormControl(''),
//     departmentAccept:  new FormControl(''),
//     departmentDate:  new FormControl(''),
//     departmentRecordNum:  new FormControl(''),
//     facultyRecordNum:  new FormControl(''),
//     facultyDate: new FormControl(''),
//     facultyAccept:  new FormControl(''),
//     universityAccept:  new FormControl(''),
//     universityDate:  new FormControl(''),
//     universityRecordNum:  new FormControl(''),
//     notes: new FormControl(''),
//   });
//
//   constructor(private routes: ActivatedRoute, private mandateService: MandateService,
//               private router: Router) {
//   }
//
//   ngOnInit() {
//     this.mandateService.getMandateById(this.id).subscribe((result:any)=>{
//       this.editMandate=new FormGroup({
//         department: new FormControl(result['department']),
//         name:   new FormControl(result['name']),
//         degree:  new FormControl(result['degree']),
//         deputationUniversity:  new FormControl(result['deputationUniversity']),
//         deputationPeriod:  new FormControl(result['deputationPeriod']),
//         deputationDaysIds:  new FormControl(result['deputationDaysIds']),
//         departmentAccept:  new FormControl(result['departmentAccept']),
//         departmentDate:   new FormControl(result['departmentDate']),
//         departmentRecordNum:  new FormControl(result['departmentRecordNum']),
//         facultyRecordNum:  new FormControl(result['facultyRecordNum']),
//         facultyDate:  new FormControl(result['facultyDate']),
//         facultyAccept:  new FormControl(result['facultyAccept']),
//         universityAccept:  new FormControl(result['universityAccept']),
//         universityDate:   new FormControl(result['universityDate']),
//         universityRecordNum:  new FormControl(result['universityRecordNum']),
//         notes: new FormControl(result['notes']),
//       })
//     })
//   }
//   update() {
//     this.mandateService.updateMandate(this.id, this.editMandate.value)
//       .subscribe(( ) => {
//         this.router.navigate([`/all-mandate`])
//       })
//   }
//
//
//   onWeekdayChange(event: any, day: number) {
//     if (event.target.checked) {
//       this.deputationDaysIds.push(day);
//     }
//     this.mandateForm.get('deputationDaysIds')?.setValue(this.deputationDaysIds);
//   }
//
//   onSubmit() {
//     if (this.mandateForm.valid) {
//       const formData = this.mandateForm.value;
//       this.mandateService.addMandate(formData).subscribe(result => {
//           this.router.navigateByUrl('/add-mandate');
//           window.location.reload();
//         }
//       )
//     }
//   }
// }
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
      facultyRecordNum: ['', Validators.required],
      facultyDate: ['', Validators.required],
      facultyAccept: ['', Validators.required],
      universityAccept: ['', Validators.required],
      universityDate: ['', Validators.required],
      universityRecordNum: ['', Validators.required],
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
