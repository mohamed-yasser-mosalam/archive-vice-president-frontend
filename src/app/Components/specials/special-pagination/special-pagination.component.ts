import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SpecialService} from "../../../Services/SpecialService/special.service";
import {AuthenticationServiceService} from "../../../Services/Security/authentication-service.service";
import baseUrl from "../../../url";

@Component({
  selector: 'app-special-pagination',
  templateUrl: './special-pagination.component.html',
  styleUrls: ['./special-pagination.component.css']
})
export class SpecialPaginationComponent implements OnInit {
  pathOfDeleteImage:any
  base=baseUrl+'/'
  x: any;
  y: any
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
    this.specialService.getSpecialsByPagination(this.page).subscribe((result) => {
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
              private auth: AuthenticationServiceService) {
  }


  showSpecialFile() {
    this.specialService.getSpecialsByPagination(this.page).subscribe((getSpecial: any) => {
      this.showSpecials = getSpecial;
      this.paths = this.showSpecials.paths.map((path: string) => {
        return this.base + path;
      });
      this.pathOfDeleteImage=this.showSpecials.paths
      this.summary = this.showSpecials.summary;
      this.subjects = this.showSpecials.subjects;
      this.decisions = this.showSpecials.subjects.decisions;
      this.id = this.showSpecials.id;
      this.createdBy=this.showSpecials.createdBy;
      this.no=this.showSpecials.no
    })
  }

  getSpecialCount() {
    this.specialService.getSpecialNumber().subscribe((numberOfSpecialFiles: any) => {
      this.pageLength = numberOfSpecialFiles;
    })
  }

  change(event:any) {
    this.page = event;
    this.showSpecialFile();
    this.specialService.getSpecialsByPagination(event).subscribe((result) => {
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
    const nextPageUrl = `/special_pagination?page=/${this.page}`;
    this.router.navigate([nextPageUrl]);
    this.showSpecial;
  }



  deleteImage(index: number): void {
    this.specialService.deleteImage(this.pathOfDeleteImage,index).subscribe();
    this.paths.splice(index, 1);
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }

  getSpecialById(archiveId: any) {
    this.specialService.getSpecialsById(this.page).subscribe((result) => {
    })
  }

  selectedFiles: File[] = [];

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
    this.specialService.addImages(this.id, formData).subscribe(() => {
     });
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }


}

