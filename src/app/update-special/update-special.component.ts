import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SpecialService} from "../Services/SpecialService/special.service";
import {Special} from "../special";


@Component({
  selector: 'app-update-special',
  templateUrl: './update-special.component.html',
  styleUrls: ['./update-special.component.css']
})
export class UpdateSpecialComponent implements OnInit {
  x: any
  form: FormGroup;
  page = this.routes.snapshot.params['id'];
  paths: []
  special: Special;


  constructor(private fb: FormBuilder, private specialService: SpecialService, private router: Router,
              private routes: ActivatedRoute) {
  }

  getSpecial() {
    this.specialService.getSpecialsById(this.page).subscribe((res: any) => {
      this.special = res
    });
  }



  createSubject() {
    return this.fb.group({
      num: [''],
      head: [''],
      decision: this.fb.array([this.createDecision()])
    });
  }

  createDecision() {
    return this.fb.group({
      num: [''],
      summary: ['']
    });
  }


  get subjects() {
    return this.form.get('subjects') as FormArray;
  }

  addSubject() {
    this.subjects.push(this.createSubject());
  }

  deleteSubject(index: number) {
    this.subjects.removeAt(index);
  }

  getDecisions(subjectIndex: number) {
    return (this.subjects.at(subjectIndex).get('decision') as FormArray);
  }

  addDecision(subjectIndex: number) {
    this.getDecisions(subjectIndex).push(this.createDecision());
  }

  deleteDecision(subjectIndex: number, decisionIndex: number) {
    this.getDecisions(subjectIndex).removeAt(decisionIndex);
  }



  ngOnInit(): void {
     this.getSpecial()
   }

}

