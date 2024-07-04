// import {Component, OnInit} from '@angular/core';
// import {FormArray, FormBuilder, FormGroup, NgForm} from "@angular/forms";
// import {ActivatedRoute, Router} from "@angular/router";
// import {Special} from "../../../special";
// import {SpecialService} from "../../../Services/SpecialService/special.service";
//
//
// @Component({
//   selector: 'app-update-special',
//   templateUrl: './update-special.component.html',
//   styleUrls: ['./update-special.component.css']
// })
// export class UpdateSpecialComponent implements OnInit {
//   no: any;
//   page = this.routes.snapshot.params['id'];
//   form: FormGroup;
//   paths: []
//   special: Special;
//
//
//   constructor(private fb: FormBuilder, private specialService: SpecialService, private router: Router,
//               private routes: ActivatedRoute) {
//   }
//
//
//   getSpecial() {
//     this.specialService.getSpecialsById(this.page).subscribe((res: any) => {
//       this.special = res;
//       this.no = this.special.no;
//     });
//   }
//
//   onSubmit(formData: any) {
//     this.specialService.updateSpecial(this.routes.snapshot.params['id'],formData).subscribe((result) => {
//       this.router.navigate([`/special-pagination?page=/`, this.no])
//     })
//    console.log(formData)
//   }
//
//   // updateSpecial() {
//   //   this.specialService.updateSpecial(this.page, this.specialForm.value).subscribe((result) => {
//   //     this.router.navigate([`/special-pagination?page=/`, this.no])
//   //   })
//   //
//   // }
//
//
//
//   get subjects() {
//     return this.form.get('subjects') as FormArray;
//   }
//
//
//   ngOnInit(): void {
//     this.getSpecial();
//     this.page = this.routes.snapshot.params['id'];
//
//   }
//
// }
//
// import {Component, OnInit} from '@angular/core';
// import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
// import {SpecialService} from "../../../Services/SpecialService/special.service";
// import {ActivatedRoute, Router} from "@angular/router";
// import {HttpClient} from "@angular/common/http";
//
// @Component({
//   selector: 'app-update-special',
//   templateUrl: './update-special.component.html',
//   styleUrls: ['./update-special.component.css']
// })
// export class UpdateSpecialComponent implements OnInit {
//   form: FormGroup;
//   specialFileId: number;
//
//   constructor(private fb: FormBuilder, private specialService: SpecialService, private router: Router, private route: ActivatedRoute, private http: HttpClient) {
//     this.form = this.fb.group({
//       incomeDate: [null],
//       sender: [''],
//       num: [null],
//       summary: [''],
//       numberOfAttachments: [''],
//       subjects: this.fb.array([this.createSubject()])
//     });
//   }
//
//   createSubject() {
//     return this.fb.group({
//       num: [null],
//       head: [''],
//       decision: this.fb.array([this.createDecision()])
//     });
//   }
//
//   createDecision() {
//     return this.fb.group({
//       num: [null],
//       summary: [''],
//       qarar: ['']
//     });
//   }
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
//   updateSpecialFile(data) {
//     this.specialService.updateSpecial(this.specialFileId, data).subscribe(() => {
//       this.router.navigate(['/special-files']);
//     });
//   }
//
//   loadSpecialFile() {
//     this.specialFileId = this.route.snapshot.params['id'];
//     this.specialService.getSpecialsById(this.specialFileId).subscribe((data: any) => {
//       this.form.patchValue({
//         incomeDate: data.incomeDate,
//         sender: data.sender,
//         num: data.num,
//         summary: data.summary,
//         numberOfAttachments: data.numberOfAttachments
//       });
//       this.form.setControl('subjects', this.fb.array(data.subjects.map(subject => this.fb.group({
//         num: subject.num,
//         head: subject.head,
//         decision: this.fb.array(subject.decision.map(decision => this.fb.group({
//           num: decision.num,
//           summary: decision.summary,
//           qarar: decision.qarar
//         })))
//       }))));
//     });
//   }
//
//   ngOnInit(): void {
//     this.loadSpecialFile();
//   }
// }


import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SpecialService} from "../../../Services/SpecialService/special.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-update-special',
  templateUrl: './update-special.component.html',
  styleUrls: ['./update-special.component.css']
})
export class UpdateSpecialComponent implements OnInit {
  form: FormGroup;
  specialFileId: number;
  no:number;


  constructor(private fb: FormBuilder, private specialService: SpecialService, private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    this.form = this.fb.group({
      incomeDate: [null, [Validators.required, Validators.minLength(1)]],
      sender: ['',[Validators.required, Validators.minLength(1)]],
      num: [null,[Validators.required, Validators.minLength(1)]],
      summary: ['',[Validators.required, Validators.minLength(1)]],
      numberOfAttachments: ['',[Validators.required, Validators.minLength(1)]],
      notes:[''],
      subjects: this.fb.array([])
    });
  }

  createSubject(subjectData?): FormGroup {
    return this.fb.group({
      num: [subjectData?.num || null],
      head: [subjectData?.head || ''],
      decision: this.fb.array(subjectData?.decision ? subjectData.decision.map(decisionData => this.createDecision(decisionData)) : [this.createDecision()])
    });
  }

  createDecision(decisionData?): FormGroup {
    return this.fb.group({
      num: [decisionData?.num || null],
      summary: [decisionData?.summary || ''],
      qarar: [decisionData?.qarar || '']
    });
  }

  get subjects(): FormArray {
    return this.form.get('subjects') as FormArray;
  }

  addSubject(subjectData?): void {
    this.subjects.push(this.createSubject(subjectData));
  }

  deleteSubject(index: number): void {
    this.subjects.removeAt(index);
  }

  getDecisions(subjectIndex: number): FormArray {
    return this.subjects.at(subjectIndex).get('decision') as FormArray;
  }

  addDecision(subjectIndex: number, decisionData?): void {
    this.getDecisions(subjectIndex).push(this.createDecision(decisionData));
  }

  deleteDecision(subjectIndex: number, decisionIndex: number): void {
    this.getDecisions(subjectIndex).removeAt(decisionIndex);
  }

  updateSpecialFile(data:any): void {
    this.specialService.updateSpecial(this.specialFileId, data).subscribe(() => {
       this.router.navigate([`/special_pagination?page=/`,this.no]);
    });
  }
  showSpecialFile() {
    this.specialService.getSpecialsById(this.specialFileId).subscribe((getSpecial: any) => {
      this.no = getSpecial.no;
      });

  }
  loadSpecialFile(): void {
    this.specialFileId = this.route.snapshot.params['id'];
    this.specialService.getSpecialsById(this.specialFileId).subscribe((data: any) => {
      this.form.patchValue({
        incomeDate: data.incomeDate,
        sender: data.sender,
        num: data.num,
        summary: data.summary,
        numberOfAttachments: data.numberOfAttachments,
        no:data.no,
        notes:data.notes
      });

      this.subjects.clear();

      data.subjects.forEach(subjectData => {
        const subjectFormGroup = this.createSubject(subjectData);
        this.subjects.push(subjectFormGroup);
      });
    });
  }

  ngOnInit(): void {
    this.loadSpecialFile();
    this.showSpecialFile()
  }
}

