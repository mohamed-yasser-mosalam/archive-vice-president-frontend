import {Component, inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {SpecialService} from "../Services/SpecialService/special.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-special',
  templateUrl: './add-special.component.html',
  styleUrls: ['./add-special.component.css']
})
export class AddSpecialComponent implements OnInit{
  form: FormGroup;
  numberOfSpecialFile:any

  constructor(private fb: FormBuilder, private specialService: SpecialService, private router: Router,
              private http:HttpClient) {
    this.form = this.fb.group({
      incomeDate: [null],
      sender: [''],
      num: [null],
      summary: [''],
      numberOfAttachments:[''],
      subjects: this.fb.array([this.createSubject()])
    });
  }

  createSubject() {
    return this.fb.group({
      num: [null],
      head: [''],
      decision: this.fb.array([this.createDecision()])
    });
  }

  createDecision() {
    return this.fb.group({
      num: [null],
      summary: [''],
      qarar:['']
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

  AddSpecialFile(data) {
    this.specialService.addSpecialFile(data).subscribe(
      response => this.router.navigateByUrl('/specialfile')
    )
  }
  getSpecailCount(): void {
    this.http.get('http://localhost:1200/special/count').subscribe((numberOfSpecialFiles: any) => {
      this.numberOfSpecialFile = numberOfSpecialFiles+1;
      console.log(this.numberOfSpecialFile)
    });
  }

  ngOnInit(): void {
    this.getSpecailCount();
  }
}
