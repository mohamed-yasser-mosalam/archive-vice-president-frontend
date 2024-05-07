// import {Component, OnInit} from '@angular/core';
// import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
// import {ActivatedRoute, Router} from "@angular/router";
// import {SpecialService} from "../Services/SpecialService/special.service";
// import {Special} from "../special";
//
//
// @Component({
//   selector: 'app-update-special',
//   templateUrl: './update-special.component.html',
//   styleUrls: ['./update-special.component.css']
// })
// export class UpdateSpecialComponent implements OnInit {
//   x: any
//   form: FormGroup;
//   page = this.routes.snapshot.params['id'];
//   paths: []
//   special: Special;
//
//
//   constructor(private fb: FormBuilder, private specialService: SpecialService, private router: Router,
//               private routes: ActivatedRoute) {
//   }
//
//   getSpecial() {
//     this.specialService.getSpecialsById(this.page).subscribe((res: any) => {
//       this.special = res
//     });
//   }
//
//
//
//   createSubject() {
//     return this.fb.group({
//       num: [''],
//       head: [''],
//       decision: this.fb.array([this.createDecision()])
//     });
//   }
//
//   createDecision() {
//     return this.fb.group({
//       num: [''],
//       summary: ['']
//     });
//   }
//
//
//   get subjects() {
//     return this.form.get('subjects') as FormArray;
//   }
//
//   addSubject() {
//     this.subjects.push(this.createSubject());
//   }
//
//   deleteSubject(index: number) {
//     this.subjects.removeAt(index);
//   }
//
//   getDecisions(subjectIndex: number) {
//     return (this.subjects.at(subjectIndex).get('decision') as FormArray);
//   }
//
//   addDecision(subjectIndex: number) {
//     this.getDecisions(subjectIndex).push(this.createDecision());
//   }
//
//   deleteDecision(subjectIndex: number, decisionIndex: number) {
//     this.getDecisions(subjectIndex).removeAt(decisionIndex);
//   }
//
//
//
//   ngOnInit(): void {
//      this.getSpecial()
//    }
//
// }
//
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SpecialService } from "../../../Services/SpecialService/special.service";
import { Special } from "../../../special";

@Component({
  selector: 'app-update-special',
  templateUrl: './update-special.component.html',
  styleUrls: ['./update-special.component.css']
})
export class UpdateSpecialComponent implements OnInit {
  form: FormGroup;
  page = this.routes.snapshot.params['id'];
  special: Special;

  constructor(private fb: FormBuilder, private specialService: SpecialService, private router: Router,
              private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSpecial();
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      sender: [''],
      num: [''],
      summary: [''],
      subjects: this.fb.array([])
    });
  }

  getSpecial(): void {
    this.specialService.getSpecialsById(this.page).subscribe((res: any) => {
      this.special = res;
      this.patchFormValues();
    });
  }

  patchFormValues(): void {
    this.form.patchValue({
      sender: this.special.sender,
      num: this.special.num,
      summary: this.special.summary
    });
    this.special.subjects.forEach(subject => {
      this.addSubject(subject);
    });
  }

  createSubject(subject?: any): FormGroup {
    return this.fb.group({
      head: [subject ? subject.head : ''],
      num: [subject ? subject.num : ''],
      decisions: this.fb.array([])
    });
  }

  createDecision(decision?: any): FormGroup {
    return this.fb.group({
      summary: [decision ? decision.summary : ''],
      num: [decision ? decision.num : '']
    });
  }

  get subjects(): FormArray {
    return this.form.get('subjects') as FormArray;
  }

  addSubject(subject?: any): void {
    this.subjects.push(this.createSubject(subject));
    if (subject && subject.decisions) {
      subject.decisions.forEach(decision => {
        this.addDecision(this.subjects.length - 1, decision);
      });
    }
  }

  deleteSubject(index: number): void {
    this.subjects.removeAt(index);
  }

  getDecisions(subjectIndex: number): FormArray {
    return this.subjects.at(subjectIndex).get('decisions') as FormArray;
  }

  addDecision(subjectIndex: number, decision?: any): void {
    this.getDecisions(subjectIndex).push(this.createDecision(decision));
  }

  deleteDecision(subjectIndex: number, decisionIndex: number): void {
    this.getDecisions(subjectIndex).removeAt(decisionIndex);
  }

  onSubmit(): void {
     console.log(this.form.value);
  }
}
