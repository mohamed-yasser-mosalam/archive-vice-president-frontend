import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SpecialService} from "../Services/SpecialService/special.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-update-special',
  templateUrl: './update-special.component.html',
  styleUrls: ['./update-special.component.css']
})
export class UpdateSpecialComponent implements OnInit {
  x: any
  form: FormGroup;
  page = this.routes.snapshot.params['id'];
  showSpecials: any;
  updateSubject: any
  updateDecision: any
  paths: []
  decision: any[];
  specialFile: any

  constructor(private fb: FormBuilder, private specialService: SpecialService, private router: Router,
              private routes: ActivatedRoute) {
    this.form = this.fb.group({
      sender: [''],
      num: [''],
      summary: [''],
      subjects: this.fb.array([this.createSubject()])
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
    return this.x = this.fb.group({
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


  showSpecialFile() {
    this.specialService.getSpecialsById(this.page).subscribe((getSpecial: any) => {
      this.showSpecials = getSpecial;
      this.updateSubject = this.showSpecials.subjects
      this.updateDecision = this.showSpecials.subjects.decision;
      this.paths = this.showSpecials.paths;
    })
  }

  ngOnInit(): void {
    this.showSpecialFile();
    this.specialService.getSpecialsById(this.routes.snapshot.params['id']).subscribe((result) => {
      this.form = new FormGroup({
        summary: new FormControl(result['summary']),
        sender: new FormControl(result['sender']),
        num: new FormControl(result['num']),
        subjects: new FormArray([])
      });
    });
   }

}
