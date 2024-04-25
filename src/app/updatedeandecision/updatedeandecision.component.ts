import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DeandecisionService} from "../Services/DeanDecision/deandecision.service";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-updatedeandecision',
  templateUrl: './updatedeandecision.component.html',
  styleUrls: ['./updatedeandecision.component.css']
})
export class UpdatedeandecisionComponent implements OnInit {
  page = this.routes.snapshot.params['page'];
  deanDecision: any;
  no: number;
  paths: string[];
  roleOfUser = this.auth.getUserRoles();
  pageLength: number;
  size: number = 1
  selectedFiles: File[] = [];
  id: number;
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
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
    this.form();
    this.getDeanDecisionByPage();
    this.getNumberOfDeanDecision()
  }

  form() {
    this.deanDecisionService.getDeanDecisionByPage(this.page).subscribe((result: any) => {
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

  getDeanDecisionByPage() {
    this.deanDecisionService.getDeanDecisionByPage(this.page).subscribe((deanDecision: any) => {
      this.deanDecision = deanDecision;
      this.no = this.deanDecision.no;
      this.paths = this.deanDecision.paths;
      this.id = this.deanDecision.id
    })

  }


  deleteImage(index: number): void {
    this.http.delete(`http://localhost:1200/image/image?imagePath=${this.paths[index]}`).subscribe();
    this.paths.splice(index, 1);
  }


  getNumberOfDeanDecision() {
    this.deanDecisionService.getNumberOfDeanDecision().subscribe((numberOfDeanDecision: any) => {
      this.pageLength = numberOfDeanDecision
    })
  }

  update() {
    const formValues = this.deanDecisions.value;  
    this.deanDecisionService.updateDeanDecision(this.page, formValues).subscribe((result) => {
      this.router.navigate([`/deandecisionpagination?page/`, this.no]);
    });
  }

}
