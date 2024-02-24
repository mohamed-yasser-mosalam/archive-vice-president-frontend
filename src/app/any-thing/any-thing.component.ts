
import {Component, DoCheck, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SpecialService} from "../Services/SpecialService/special.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-any-thing',
  templateUrl: './any-thing.component.html',
  styleUrls: ['./any-thing.component.css']
})
export class AnyThingComponent implements OnInit {
  dataForm: FormGroup;
  subjects:any

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.initForm();
    this.fetchData();
  }

  initForm() {
    this.dataForm = this.fb.group({
      subjects: this.fb.array([])
    });
  }

  fetchData() {
    // Fetch data from the API
    this.http.get<any>('your-api-endpoint')
      .subscribe(data => {
        this.setFormData(data);
      });
  }

  setFormData(data: any) {
    const subjectsArray = this.dataForm.get('subjects') as FormArray;
    data.subjects.forEach(subject => {
      const subjectGroup = this.fb.group({
        num: [subject.num],
        head: [subject.head],
        decision: this.fb.array([])
      });
      subject.decision.forEach(decision => {
        (subjectGroup.get('decision') as FormArray).push(this.fb.group({
          num: [decision.num],
          summary: [decision.summary]
        }));
      });
      subjectsArray.push(subjectGroup);
    });
  }

  addSubject() {
    const subjectsArray = this.dataForm.get('subjects') as FormArray;
    subjectsArray.push(this.fb.group({
      num: [''],
      head: [''],
      decision: this.fb.array([])
    }));
  }

  addDecision(subjectIndex: number) {
    const subjectsArray = this.dataForm.get('subjects') as FormArray;
    const decisionsArray = (subjectsArray.at(subjectIndex).get('decision') as FormArray);
    decisionsArray.push(this.fb.group({
      num: [''],
      summary: ['']
    }));
  }

  removeDecision(subjectIndex: number, decisionIndex: number) {
    const subjectsArray = this.dataForm.get('subjects') as FormArray;
    const decisionsArray = (subjectsArray.at(subjectIndex).get('decision') as FormArray);
    decisionsArray.removeAt(decisionIndex);
  }

  submitForm() {
    // Submit the form data to the API
    const formData = this.dataForm.value;
    this.http.put('your-api-endpoint', formData)
      .subscribe(() => {
        console.log('Form data submitted successfully.');
      });
  }

  decisions:any
}
