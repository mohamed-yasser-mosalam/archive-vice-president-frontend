
import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SpecialService} from "../Services/SpecialService/special.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-any-thing',
  templateUrl: './any-thing.component.html',
  styleUrls: ['./any-thing.component.css']
})
export class AnyThingComponent implements OnInit{
//   meetingForm: FormGroup;
//
//   constructor(private formBuilder: FormBuilder) { }
//   ngOnInit(): void {
//      this.meetingForm = this.formBuilder.group({
//       importNum: [],
//       summary: [''],
//       incomeDate: [''],
//       sender: [''],
//       paths: this.formBuilder.array([]),
//       numberOfAttachments: [],
//       subjects: this.formBuilder.array([])
//     });
//
//     // Add an initial subject to the form
//     this.addSubject();
//   }
//
//   addSubject(): void {
//     // Add a subject FormGroup to the subjects FormArray
//     const subjectGroup = this.formBuilder.group({
//       num: [],
//       head: [''],
//       decision: this.formBuilder.array([])
//     });
//
//     // Add a default decision to the subject
//     this.addDecision(subjectGroup);
//
//     (this.meetingForm.get('subjects') as FormArray).push(subjectGroup);
//   }
//
//   addDecision(subjectGroup: FormGroup): void {
//     // Add a decision FormGroup to the decision FormArray within the given subject
//     const decisionGroup = this.formBuilder.group({
//       num: [],
//       summary: ['']
//     });
//
//     (subjectGroup.get('decision') as FormArray).push(decisionGroup);
//   }
//
//   onSubmit(): void {
//     // Handle form submission
//     console.log(this.meetingForm.value);
//   }
//   getControls() {
//     return (this.meetingForm.get('controlName') as FormArray).controls;
//   }
// }


  constructor(private specialService:SpecialService,private router:Router,) {
  }
  SpecialForm: FormGroup = new FormGroup({
    incomeDate: new FormControl(''),
    sender: new FormControl(''),
    num: new FormControl(''),
    summary: new FormControl(''),
    subjects: new FormArray([this.getSubjectFields()]),
  });

  getSubjectFields(): FormGroup {
    return new FormGroup({
      head: new FormControl(""),
      num: new FormControl(""),
      decisionSubject: new FormGroup({
        decision: new FormArray([this.putNewDecision()]),
      }),
    });
  }

  putNewDecision() {
    return new FormGroup({
      num: new FormControl(""),
      summary: new FormControl(""),
    });
  }

  subjectListArray() {
    return this.SpecialForm.get("subjects") as FormArray;
  }

  addSubject() {
    this.subjectListArray().push(this.getSubjectFields());
  }

  removeSubject(i: number) {
    this.subjectListArray().removeAt(i);
  }

  subjectsFormGroup(i: number) {
    return this.subjectListArray().at(i).get("decisionSubject") as FormGroup;
  }

  decisionArray(i: number) {
    return this.subjectsFormGroup(i).get("decision") as FormArray;
  }

  addNewDecision(i: number) {
    this.decisionArray(i).push(this.putNewDecision());
  }

  removeNewDecision(i: number, j: number) {
    this.decisionArray(i).removeAt(j);
  }
  addSpecialFile(data ) {
    this.specialService.addSpecialFile(data).subscribe(
      response => this.router.navigateByUrl('/getallexports'),
    )
    console.log(data)
  }

  ngOnInit(): void {
  }
}



















// // import {Component, OnInit} from '@angular/core';
// // import {FormArray, FormControl, FormGroup} from "@angular/forms";
// // import {SpecialService} from "../Services/SpecialService/special.service";
// // import {Router} from "@angular/router";
// //
// // @Component({
// //   selector: 'app-any-thing',
// //   templateUrl: './any-thing.component.html',
// //   styleUrls: ['./any-thing.component.css']
// // })
// // export class AnyThingComponent {
// //   constructor(private specialService:SpecialService,private router:Router,) {
// //   }
// //   SpecialForm: FormGroup = new FormGroup({
// //     incomeDate: new FormControl(''),
// //     sender: new FormControl(''),
// //     num: new FormControl(''),
// //     summary: new FormControl(''),
// //     subjects: new FormArray([this.getSubjectFields()]),
// //   });
// //
// //   getSubjectFields(): FormGroup {
// //     return new FormGroup({
// //       head: new FormControl(""),
// //       num: new FormControl(""),
// //       studentSubjects: new FormGroup({
// //         decisions: new FormArray([this.putNewDecision()]),
// //       }),
// //     });
// //   }
// //
// //   putNewDecision() {
// //     return new FormGroup({
// //       num: new FormControl(""),
// //       summary: new FormControl(""),
// //     });
// //   }
// //
// //   subjectListArray() {
// //     return this.SpecialForm.get("subjects") as FormArray;
// //   }
// //
// //   addSubject() {
// //     this.subjectListArray().push(this.getSubjectFields());
// //   }
// //
// //   removeSubject(i: number) {
// //     this.subjectListArray().removeAt(i);
// //   }
// //
// //   subjectsFormGroup(i: number) {
// //     return this.subjectListArray().at(i).get("studentSubjects") as FormGroup;
// //   }
// //
// //   subjectsArray(i: number) {
// //     return this.subjectsFormGroup(i).get("decisions") as FormArray;
// //   }
// //
// //   addNewSubject(i: number) {
// //     this.subjectsArray(i).push(this.putNewDecision());
// //   }
// //
// //   removeNewSubject(i: number, j: number) {
// //     this.subjectsArray(i).removeAt(j);
// //   }
// //
// //   // getFormData() {
// //   //   let serverData: any = [],
// //   //     tempStudentFormData = JSON.parse(JSON.stringify(this.studentForm.value));
// //   //   tempStudentFormData.studentList.forEach((element: any) => {
// //   //     let tempObj: any = {
// //   //       head: element.head,
// //   //       subjectNum: element.num,
// //   //       subject: [],
// //   //     };
// //   //     element.studentSubjects.studentSubjectArray.forEach(
// //   //       (elementSubjectObj: any) => {
// //   //         let tempSubObj: any = {
// //   //           decisionNum: elementSubjectObj.num,
// //   //           summary: elementSubjectObj.summary,
// //   //         };
// //   //         tempObj.subject.push(tempSubObj);
// //   //       }
// //   //     );
// //   //     tempObj.subject = JSON.stringify(tempObj.subject);
// //   //     serverData.push(tempObj);
// //   //   });
// //   //
// //   //   console.log(serverData);
// //   // }
// //   addSpecialFile(data ) {
// //     this.specialService.addSpecialFile(data).subscribe(
// //       response => this.router.navigateByUrl('/getallexports'),
// //     )
// //     console.log(data)
// //   }
// // }
