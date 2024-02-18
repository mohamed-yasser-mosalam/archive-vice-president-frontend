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
  form: FormGroup;
  page = this.routes.snapshot.params['id'];
  showSpecials: any;
  subject: any;
  decision: any[];


  constructor(private fb: FormBuilder, private specialService: SpecialService, private router: Router,
              private routes: ActivatedRoute) {
    this.form = this.fb.group({
      sender: [''],
      num: [null],
      summary: [''],
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

  AddSpecialFile(data) {
    this.specialService.addSpecialFile(data).subscribe(
      response => this.router.navigateByUrl('/specialfile')
    )
  }

  showSpecialFile() {
    this.specialService.getSpecialFileById(this.page).subscribe((getSpecial: any) => {
      this.showSpecials = getSpecial;
      this.subject=this.showSpecials.subject
    })
  }

  ngOnInit(): void {
    this.showSpecialFile();
    this.specialService.getSpecialFileById(this.routes.snapshot.params['id']).subscribe((result) => {
      this.form = new FormGroup({
        summary: new FormControl(result['summary']),
        sender: new FormControl(result['sender']),
        num: new FormControl(result['num']),
        head:new FormControl(result['head']),
        });
    })
    console.log(this.subject)
   }



}

//   x: any;
//   y: any
//   id: string;
//   page = this.routes.snapshot.params['id'];
//   showSpecials: any;
//   editSpecial = new FormGroup({
//     id: new FormControl(''),
//     name: new FormControl(''),
//     summary: new FormControl(''),
//     numberOfAttachments: new FormControl(''),
//     incomeDate: new FormControl(''),
//     sender: new FormControl(''),
//     archiveId: new FormControl(''),
//     typeNumber: new FormControl(''),
//     num: new FormControl(''),
//   })
//
//   ngOnInit(): void {
//     this.showSpecialFile();
//     this.specialService.getSpecialFileById(this.routes.snapshot.params['id']).subscribe((result) => {
//       this.editSpecial = new FormGroup({
//         id: new FormControl(result['id']),
//         name: new FormControl(result['name']),
//         summary: new FormControl(result['summary']),
//         numberOfAttachments: new FormControl(result['numberOfAttachments']),
//         incomeDate: new FormControl(result['incomeDate']),
//         sender: new FormControl(result['sender']),
//         archiveId: new FormControl(result['archiveId']),
//         typeNumber: new FormControl(result['typeNumber']),
//         num: new FormControl(result['num']),
//       })
//     })
//
//   }
//
//   constructor(private specialService: SpecialService, private routes: ActivatedRoute, private router: Router,
//               private http: HttpClient
//   ) {
//   }
//
//
//   showSpecialFile() {
//     this.specialService.getSpecialFileById(this.page).subscribe((getSpecial: any) => {
//       this.showSpecials = getSpecial;
//     })
//   }
//
//   update() {
//     this.specialService.updateSpecial(this.routes.snapshot.params['id'], this.editSpecial.value).subscribe((result) => {
//       this.router.navigate([`/special-pagination?id/`, this.x]);
//     })
//
//   }
//
//   onImageSelected(event) {
//     const file = event.target.files[0]
//     const formDate: FormData = new FormData()
//     this.x = formDate.append("files", file)
//     this.http.post(`http://localhost:1200/image/multipleFiles?id=${this.routes.snapshot.params['id']}&pathType=imports`, formDate).subscribe(
//       (result) => {
//       })
//
//   }
//
// }





