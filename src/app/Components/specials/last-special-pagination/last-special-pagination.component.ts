import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SpecialService} from "../../../Services/SpecialService/special.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationServiceService} from "../../../Services/Security/authentication-service.service";
import baseUrl from "../../../url";

@Component({
  selector: 'app-last-special-pagination',
  templateUrl: './last-special-pagination.component.html',
  styleUrls: ['./last-special-pagination.component.css']
})
export class LastSpecialPaginationComponent implements OnInit {
  pathOfDeleteImage:any
  base=baseUrl+'/'
  id: number;
  summary: string;
  createdBy:string;
  no:any;
  roleOfUser = this.auth.getUserRoles()
  page = this.routes.snapshot.params['page'];
  pageLength: any;
  showSpecials: any;
  size: number = 1;
  paths: string[];
  numbers: any[];
  subjects: any[];
  decisions: any[];
  showSpecial = new FormGroup({
    createdBy:new FormControl(''),
    no: new FormControl(''),
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
    this.specialService.getSpecialsById(this.page).subscribe((result) => {
      this.showSpecial = new FormGroup({
        createdBy: new FormControl(result['createdBy']),
        no: new FormControl(result['no']),
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
              private http: HttpClient, private auth: AuthenticationServiceService
  ) {
  }


  showSpecialFile() {
    this.specialService.getSpecialsById(this.page).subscribe((getSpecial: any) => {
      this.showSpecials = getSpecial;
      this.paths = this.showSpecials.paths.map((path: string) => {
        return this.base + path;
      });
      this.pathOfDeleteImage = this.showSpecials.paths;
      this.summary = this.showSpecials.summary;
      this.subjects = this.showSpecials.subjects;
      this.decisions = this.showSpecials.subjects.decisions;
      this.id = this.showSpecials.id;
      this.createdBy=this.showSpecials.createdBy;
      this.no=this.showSpecials.no
    })
  }

  getSpecialCount() {
    this.specialService.getLastSpecialNumber().subscribe((numberOfSpecialFiles: any) => {
      this.pageLength = numberOfSpecialFiles;
    })
  }

  change(event) {
    this.page = event;
    this.showSpecialFile();
    this.specialService.getSpecialsById(event).subscribe((result) => {
      this.showSpecial = new FormGroup({
        no: new FormControl(result['no']),
        createdBy: new FormControl(result['createdBy']),
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
    const nextPageUrl = `/lastspecial_pagination/${this.page}`;
    this.router.navigate([nextPageUrl]);
  }





}

