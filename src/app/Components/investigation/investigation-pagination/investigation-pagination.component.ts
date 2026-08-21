import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import baseUrl from "../../../url";
import { InvestigationService } from "../../../Services/investigation/investigation.service";
import { AuthenticationServiceService } from "../../../Services/Security/authentication-service.service";

@Component({
  selector: 'app-investigation-pagination',
  templateUrl: './investigation-pagination.component.html',
  styleUrls: ['./investigation-pagination.component.css']
})
export class InvestigationPaginationComponent implements OnInit {
  pathOfDeleteImage: any;
  id: number;
  base = baseUrl + '/';
  roleOfUser = this.auth.getUserRoles();
  page: number;
  pageLength: number;
  showInvestigation: any;
  size: number = 1;
  paths: string[] = [];
  selectedFiles: File[] = [];

  showForm = new FormGroup({
    id: new FormControl(''),
    studentName: new FormControl(''),
    academicYear: new FormControl(''),
    year: new FormControl(''),
    semester: new FormControl(''),
    department: new FormControl(''),
    exam: new FormControl(''),
    investigationKind: new FormControl(''),
    examDate: new FormControl(''),
    investigationName: new FormControl(''),
    investigationResult: new FormControl(''),
    investigationDate: new FormControl(''),
    belongings: new FormControl(''),
    result: new FormControl(''),
    numberOfImages: new FormControl(''),
  });

  constructor(
    private investigationService: InvestigationService,
    private auth: AuthenticationServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.page = +params['page'] || 1;
      this.loadInvestigation();
      this.getCount();
    });
  }

  loadInvestigation(): void {
    this.investigationService.getByPagination(this.page).subscribe((investigation: any) => {
      if (!investigation) {
        this.paths = [];
        return;
      }
      this.showInvestigation = investigation;
      this.paths = (investigation.paths || []).map((path: string) => this.base + path);
      this.id = investigation.id;
      this.pathOfDeleteImage = investigation.paths || [];
      this.showForm.patchValue({
        id: investigation.id,
        studentName: investigation.studentName,
        academicYear: investigation.academicYear,
        year: investigation.year,
        semester: investigation.semester,
        department: investigation.department,
        exam: investigation.exam,
        investigationKind: investigation.investigationKind,
        examDate: investigation.examDate,
        investigationName: investigation.investigationName,
        investigationResult: investigation.investigationResult,
        investigationDate: investigation.investigationDate,
        belongings: investigation.belongings,
        result: investigation.result,
        numberOfImages: investigation.numberOfImages
      });
    });
  }

  getCount(): void {
    this.investigationService.getCount().subscribe((count: number) => {
      this.pageLength = count;
    });
  }

  change(event: number): void {
    this.page = event;
    this.router.navigate(['/investigation-pagination'], { queryParams: { page: this.page } });
    this.loadInvestigation();
  }

  deleteImage(index: number): void {
    this.investigationService.deleteImage(this.pathOfDeleteImage, index).subscribe(() => {
      this.paths.splice(index, 1);
      this.loadInvestigation();
    });
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
    this.investigationService.addImages(this.id, formData).subscribe(() => {
      this.selectedFiles = [];
      this.loadInvestigation();
    });
  }
}
