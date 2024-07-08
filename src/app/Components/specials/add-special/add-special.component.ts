import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SpecialService} from "../../../Services/SpecialService/special.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-special',
  templateUrl: './add-special.component.html',
  styleUrls: ['./add-special.component.css']
})
export class AddSpecialComponent implements OnInit{
  form: FormGroup;
  numberOfSpecialFile: any;

  constructor(private fb: FormBuilder, private specialService: SpecialService, private router: Router,
              private http: HttpClient) {
    this.form = this.fb.group({
      incomeDate: [null, [Validators.required, Validators.minLength(1)]],
      sender: ['', [Validators.required, Validators.minLength(1)]],
      num: [null, [Validators.required, Validators.minLength(1)]],
      summary: ['', [Validators.required, Validators.minLength(1)]],
      numberOfAttachments: ['', [Validators.required, Validators.minLength(1)]],
      showSubjects: [false, [Validators.required, Validators.minLength(1)]],
      subjects: this.fb.array([this.createSubject()])
    });
  }

  createSubject() {
    return this.fb.group({
      num: [null],
      head: [''],
      decision: this.fb.array([this.createDecision()]),
    });
  }

  createDecision() {
    return this.fb.group({
      num: [null],
      summary: [''],
      qarar: [''],
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

  AddSpecialFile(data: any) {
    // Initialize an array to store valid subjects
    let validSubjects: any[] = [];

     data.subjects.forEach((subject: any) => {
      if (subject.head.trim() !== '' && subject.decision.length > 0) {
        validSubjects.push(subject);
      }
    });

    data.subjects = validSubjects;

    // Submit data
    this.specialService.addSpecialFile(data).subscribe(() => {
      window.location.reload();
    });
  }


  getSpecailCount(): void {
    this.specialService.getSpecialNumber().subscribe((numberOfSpecialFiles: any) => {
      this.numberOfSpecialFile = numberOfSpecialFiles + 1;
    });
  }

  ngOnInit(): void {
    this.getSpecailCount();
  }
}
