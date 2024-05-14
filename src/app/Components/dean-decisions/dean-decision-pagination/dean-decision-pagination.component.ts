import {Component, OnInit} from '@angular/core';
import {DeandecisionService} from "../../../Services/DeanDecision/deandecision.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationServiceService} from "../../../Services/Security/authentication-service.service";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import baseUrl from "../../../url";

@Component({
  selector: 'app-dean-decision-pagination',
  templateUrl: './dean-decision-pagination.component.html',
  styleUrls: ['./dean-decision-pagination.component.css']
})
export class DeanDecisionPaginationComponent  implements OnInit {
  pathOfDeleteImage:any
  base=baseUrl+'/'
  page = this.routes.snapshot.params['page'];
  deanDecision: any;
  no: number;
  paths: string[];
  roleOfUser = this.auth.getUserRoles();
  pageLength: number;
  size:number=1
  selectedFiles: File[] = [];
  id: number;
  deanDecisions = new FormGroup({
    no: new FormControl(''),
    date: new FormControl(''),
    summary: new FormControl(''),
    createdBy: new FormControl(''),
    typeNumber: new FormControl(''),
    num: new FormControl(''),
    numberOfAttachments: new FormControl(''),
    numberOfImages: new FormControl(''),
  })


  constructor(private deanDecisionService: DeandecisionService,
              private auth: AuthenticationServiceService,
              private routes: ActivatedRoute,
              private http: HttpClient,
              private router:Router) {
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
        numberOfAttachments: result['numberOfAttachments'],
        numberOfImages: result['numberOfImages'],
        num: result['num']
      })
    })
  }

  getDeanDecisionByPage() {
    this.deanDecisionService.getDeanDecisionByPage(this.page).subscribe((deanDecision: any) => {
      this.deanDecision = deanDecision;
      this.paths = this.deanDecision.paths.map((path: string) => {
        return this.base + path;
      });
      this.no = this.deanDecision.no;
      this.pathOfDeleteImage = this.deanDecision.paths;
      this.id = this.deanDecision.id;

    })
  }


  deleteImage(index: number): void {
    this.deanDecisionService.deleteImage(this.pathOfDeleteImage,index).subscribe();
    this.paths.splice(index, 1);
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i);
        if (file) {
          this.selectedFiles.push(file);
        }
      }
    }
  }

  onSubmit(): void {
    const formData: FormData = new FormData();
    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append('files', this.selectedFiles[i]);
    }
    this.deanDecisionService.addImages(this.id, formData).subscribe(() => {
    });
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }

  getNumberOfDeanDecision() {
   this.deanDecisionService.getNumberOfDeanDecision().subscribe((numberOfDeanDecision:any)=>{
     this.pageLength=numberOfDeanDecision;
   })
  }

  change(event): void {
    this.page = event;
    this.getDeanDecisionByPage();
    this.deanDecisionService.getDeanDecisionByPage(event).subscribe((result) => {
      this.deanDecisions = new FormGroup({
        date: new FormControl(result['date']),
        createdBy: new FormControl(result['createdBy']),
        no: new FormControl(result['no']),
        num: new FormControl(result['num']),
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        numberOfImages: new FormControl(result['numberOfImages']),
        summary: new FormControl(result['summary']),
        typeNumber: new FormControl(result['typeNumber'])
      });
    });
    const nextPageUrl = `/dean-decision-pagination?page=/${this.page}`;
    this.router.navigate([nextPageUrl]);
    this.form();
  }
}
