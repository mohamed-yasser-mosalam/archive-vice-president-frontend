import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {SpecialService} from "../Services/SpecialService/special.service";

@Component({
  selector: 'app-special-pagination',
  templateUrl: './special-pagination.component.html',
  styleUrls: ['./special-pagination.component.css']
})
export class SpecialPaginationComponent implements OnInit {
  x: any;
  y: any
  id: string;
  page = this.routes.snapshot.params['id'];
  pageLength: any;
  showSpecials: any;
  size: number = 1;
  paths: string[];
  numbers: any = [];
  showSpecial = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    summary: new FormControl(''),
    numberOfAttachments: new FormControl(''),
    incomeDate: new FormControl(''),
    sender: new FormControl(''),
    archiveId: new FormControl(''),
    typeNumber: new FormControl(''),
    num: new FormControl(''),
  })

  ngOnInit(): void {
    this.getSpecialCount();
    this.showSpecialFile();
    this.specialService.getSpecialFileById(this.routes.snapshot.params['id']).subscribe((result) => {
      this.showSpecial = new FormGroup({
        id: new FormControl(result['id']),
        name: new FormControl(result['name']),
        summary: new FormControl(result['summary']),
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        incomeDate: new FormControl(result['incomeDate']),
        sender: new FormControl(result['sender']),
        archiveId: new FormControl(result['archiveId']),
        typeNumber: new FormControl(result['typeNumber']),
        num: new FormControl(result['num']),
      })
    })

  }

  constructor(private specialService: SpecialService, private routes: ActivatedRoute, private router: Router,
              private http: HttpClient
  ) {
  }


  showSpecialFile() {
    this.specialService.getSpecialFileById(this.page).subscribe((getSpecial: any) => {
      this.showSpecials = getSpecial;
      this.paths = this.showSpecials.paths;
      console.log(this.showSpecials)
    })
  }

  getSpecialCount() {
    this.http.get('http://localhost:1200/export/count').subscribe((numberOfExportFiles: any) => {
      this.pageLength = numberOfExportFiles;
    })
  }

  change() {
    this.page;
    this.showSpecialFile();
    this.specialService.getSpecialFileById(this.page).subscribe((result) => {
      this.showSpecial = new FormGroup({
        id: new FormControl(result['id']),
        name: new FormControl(result['name']),
        summary: new FormControl(result['summary']),
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        incomeDate: new FormControl(result['incomeDate']),
        sender: new FormControl(result['sender']),
        archiveId: new FormControl(result['archiveId']),
        typeNumber: new FormControl(result['typeNumber']),
        num: new FormControl(result['num']),
      })
    })

  }

  onImageSelected(event) {
    const file = event.target.files[0]
    const formDate: FormData = new FormData()
    this.x = formDate.append("files", file)
    this.http.post(`http://localhost:1200/image/multipleFiles?id=${this.page}&pathType=exports`, formDate).subscribe(
      (result) => {
      })

  }



}


// import {Component, OnInit} from '@angular/core';
// import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
// import {ActivatedRoute, Router} from "@angular/router";
// import {HttpClient} from "@angular/common/http";
// import {SpecialService} from "../Services/SpecialService/special.service";
//
// @Component({
//   selector: 'app-special-pagination',
//   templateUrl: './special-pagination.component.html',
//   styleUrls: ['./special-pagination.component.css']
// })
// export class SpecialPaginationComponent implements OnInit{
//   x: any;
//   y: any
//   id: string;
//   page = this.routes.snapshot.params['id'];
//   pageLength: any;
//   showExports: any;
//   size: number = 1;
//   paths: string[];
//   numbers: any = [];
//   showExport = new FormGroup({
//     date: new FormControl(''),
//     receiver: new FormControl(''),
//     numberOfAttachments: new FormControl(''),
//     id: new FormControl(''),
//     num: new FormControl(''),
//     recipientName: new FormControl(''),
//     summary: new FormControl(''),
//     urgentDate: new FormControl(''),
//     urgentNum: new FormControl(''),
//     responseDate: new FormControl(''),
//     responseNumber: new FormControl(''),
//   })
//
//   ngOnInit(): void {
//     this.getExportCount();
//     this.showExportFile();
//     this.specialService.getSpecialFileById(this.routes.snapshot.params['id']).subscribe((result) => {
//       this.showExport = new FormGroup({
//         date: new FormControl(result['date']),
//         receiver: new FormControl(result['receiver']),
//         numberOfAttachments: new FormControl(result['numberOfAttachments']),
//         id: new FormControl(result['id']),
//         num: new FormControl(result['num']),
//         recipientName: new FormControl(result['recipientName']),
//         summary: new FormControl(result['summary']),
//         urgentDate: new FormControl(result['urgentDate']),
//         urgentNum: new FormControl(result['urgentNum']),
//         responseDate: new FormControl(result['responseDate']),
//         responseNumber: new FormControl(result['responseNumber'])
//       })
//     })
//
//   }
//
//   constructor(private specialService: SpecialService, private routes: ActivatedRoute, private router: Router,
//               private http: HttpClient,private formbuilder:FormBuilder
//    ) {
//   }
//
//   form=this.formbuilder.group({
//     items:this.formbuilder.array([]),
//   })
//     get items( ){
//      return this.form.get("items") as FormArray
//   }
//
//   deleteItems(index:number){
//     this.items.removeAt(index)
//   }
//
//   addItem(){
//     this.items.push( this.formbuilder.group({
//       name:['']
//     }))
//   }
//
//
//
//   showExportFile() {
//     this.specialService.getSpecialFileById(this.page).subscribe((getExport: any) => {
//       this.showExports = getExport;
//       this.paths = this.showExports.paths
//     })
//   }
//
//   getExportCount() {
//     this.http.get('http://localhost:1200/export/count').subscribe((numberOfExportFiles: any) => {
//       this.pageLength = numberOfExportFiles;
//     })
//   }
//
//   change() {
//     this.page;
//     this.showExportFile();
//     this.specialService.getSpecialFileById(this.page).subscribe((result) => {
//       this.showExport = new FormGroup({
//         date: new FormControl(result['date']),
//         receiver: new FormControl(result['receiver']),
//         numberOfAttachments: new FormControl(result['numberOfAttachments']),
//         id: new FormControl(result['id']),
//         num: new FormControl(result['num']),
//         recipientName: new FormControl(result['recipientName']),
//         summary: new FormControl(result['summary']),
//         urgentDate: new FormControl(result['urgentDate']),
//         urgentNum: new FormControl(result['urgentNum']),
//         responseDate: new FormControl(result['responseDate']),
//         responseNumber: new FormControl(result['responseNumber'])
//       })
//     })
//
//   }
//
//   onImageSelected(event) {
//     const file = event.target.files[0]
//     const formDate: FormData = new FormData()
//     this.x = formDate.append("files", file)
//     this.http.post(`http://localhost:1200/image/multipleFiles?id=${this.page}&pathType=exports`, formDate).subscribe(
//       (result) => {
//       })
//
//   }
//
// }
