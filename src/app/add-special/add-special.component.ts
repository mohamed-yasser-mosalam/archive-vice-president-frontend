import {Component, inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {SpecialService} from "../Services/SpecialService/special.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-special',
  templateUrl: './add-special.component.html',
  styleUrls: ['./add-special.component.css']
})
export class AddSpecialComponent implements OnInit {
  formData: FormGroup;
  subjectForm:FormGroup
  formBuilder = inject(FormBuilder)
  num='0'
  constructor(private specialService:SpecialService,private router:Router,) {
  }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      incomeDate: [],
      sender: [''],
      num: [],
      summary: [''],
      subjects: this.formBuilder.array([this.subjectsForm()])
    });
    this.subjectsForm
  }

  get getSubject() {
    return this.formData.get('subjects') as FormArray
  }

  subjectsForm():FormGroup  {
    this.subjectForm= this.formBuilder.group({
      num: [],
      head: [''],
      decision: this.formBuilder.array([this.decisionForm()])
    });
     return this.subjectForm
  }
    getDecision(i:number) {
    return this.subjectForm.get('decision') as FormArray
  }
  decisionForm(): FormGroup {
    return this.formBuilder.group({
      num: [],
      summary: ['']
    });
  }
  removeSubject(index: number) {
    this.getSubject.removeAt(index)

  }
  addSubjects() {
    this.getSubject.push(this.subjectsForm())
   }
  addDecision(i:number) {
    this.getDecision(i).push(this.decisionForm())

  }
  deleteDecision(i:number,j:number) {
    this.getDecision(i).removeAt(j)
  }


  AddSpecialFile(data) {
    this.specialService.addSpecialFile(data).subscribe(
      response => this.router.navigateByUrl('/specialfile')
    )
  }

}
