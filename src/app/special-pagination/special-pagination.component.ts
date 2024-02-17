import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {SpecialService} from "../Services/SpecialService/special.service";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";

@Component({
  selector: 'app-special-pagination',
  templateUrl: './special-pagination.component.html',
  styleUrls: ['./special-pagination.component.css']
})
export class SpecialPaginationComponent implements OnInit {
  x: any;
  y: any
  id: string;
  summary: string;
  idOfUser=this.auth.getUserRoles()
  page = this.routes.snapshot.params['id'];
  pageLength: any;
  showSpecials: any;
  size: number = 1;
  paths: string[];
  numbers: any[];
  subjects: any[];
  decisions: any[];
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
              private http: HttpClient,private auth:AuthenticationServiceService
  ) {
  }


  showSpecialFile() {
    this.specialService.getSpecialFileById(this.page).subscribe((getSpecial: any) => {
      this.showSpecials = getSpecial;
      this.paths = this.showSpecials.paths;
      this.summary = this.showSpecials.summary;
      this.subjects = this.showSpecials.subjects;
      this.decisions=this.showSpecials.subjects.decisions;
     })
  }

  getSpecialCount() {
    this.http.get('http://localhost:1200/special/count').subscribe((numberOfSpecialFiles: any) => {
      this.pageLength = numberOfSpecialFiles;
    })
  }

  change() {
    this.page;
    this.showSpecialFile();
    this.specialService.getSpecialFileById(this.page).
    subscribe((result) => {
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
    this.http.post(`http://localhost:1200/image/multipleFiles?id=${this.page}&pathType=specials`, formDate).subscribe(
      (result) => {
      })
  }


}

