import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DeandecisionService} from "../../../Services/DeanDecision/deandecision.service";
import {AuthenticationServiceService} from "../../../Services/Security/authentication-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../../url";

@Component({
  selector: 'app-last-dean-decision-pagination',
  templateUrl: './last-dean-decision-pagination.component.html',
  styleUrls: ['./last-dean-decision-pagination.component.css']
})
export class LastDeanDecisionPaginationComponent  implements OnInit {
  pathOfDeleteImage:any
  base=baseUrl+'/'
  page = this.routes.snapshot.params['page'];
  deanDecision: any;
  no: number;
  paths: string[];
  roleOfUser = this.auth.getUserRoles();
  pageLength: number;
  size:number=1
  id=this.routes.snapshot.params['page'];
  deanDecisions = new FormGroup({
    no: new FormControl(''),
    date: new FormControl(''),
    summary: new FormControl(''),
    createdBy: new FormControl(''),
    typeNumber: new FormControl(''),
    num: new FormControl(''),
  })


  constructor(private deanDecisionService: DeandecisionService,
              private auth: AuthenticationServiceService,
              private routes: ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    this.form();
    this.getDeanDecisionById();
    this.getNumberOfDeanDecision()
  }

  form() {
    this.deanDecisionService.getDeanDecisionById(this.page).subscribe((result: any) => {
      this.deanDecisions.patchValue({
        no: result['no'],
        date: result['date'],
        summary: result['summary'],
        createdBy: result['createdBy'],
        typeNumber: result['typeNumber'],
        num: result['num']
      })
    })
  }

  getDeanDecisionById() {
    this.deanDecisionService.getDeanDecisionById(this.page).subscribe((deanDecision: any) => {
      this.deanDecision = deanDecision;
      this.paths = this.deanDecision.paths.map((path: string) => {
        return this.base + path;
      });
      this.no = this.deanDecision.no;
      this.pathOfDeleteImage = this.deanDecision.paths;
      this.id = this.deanDecision.id
    })

  }


  getNumberOfDeanDecision() {
    this.deanDecisionService.getNumberOfLastDeanDecision().subscribe((numberOfDeanDecision:any)=>{
      this.pageLength=numberOfDeanDecision
    })
  }

  change(event): void {
    this.page = event;
    this.getDeanDecisionById();
    this.deanDecisionService.getDeanDecisionById(event).subscribe((result) => {
      this.deanDecisions = new FormGroup({
        date: new FormControl(result['date']),
        createdBy: new FormControl(result['createdBy']),
        no: new FormControl(result['no']),
        num: new FormControl(result['num']),
        summary: new FormControl(result['summary']),
        typeNumber: new FormControl(result['typeNumber'])
      });
    });
    const nextPageUrl = `/lastdeandecision_pagination/${this.page}`;
    this.router.navigate([nextPageUrl]);
    this.form();
  }
}
