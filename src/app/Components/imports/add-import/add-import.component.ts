import {Component, OnInit} from '@angular/core';
import {ImportServiceService} from "../../../Services/ImportsServices/import-service.service";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationServiceService} from "../../../Services/Security/authentication-service.service";
import {AllFilesService} from "../../../Services/AllFile/all-files.service";

@Component({
  selector: 'app-add-import',
  templateUrl: './add-import.component.html',
  styleUrls: ['./add-import.component.css']
})
export class AddImportComponent implements OnInit {
  numberOfImportFile: any;
  importForm: FormGroup;
  importArchive:any
  roleOfUser=this.auth.getUserRoles();

  constructor(
    private importService: ImportServiceService,
    private fb: FormBuilder,
    private auth: AuthenticationServiceService,
    private  allFilesService:AllFilesService
  ) {}

  ngOnInit(): void {
    console.log( this.getAllImportsArchive())
    this.getAllImportsArchive();
    this.getImportCount();
    this.importForm = this.fb.group({
      no: [''],
      sender: ['', [Validators.required, Validators.minLength(4)]],
      numberOfAttachments: ['',[Validators.required,]],
      incomeDate: ['', [Validators.required]],
      incomingLetterDate: ['',  ],
      incomingLetterNumber: ['' ],
      summary: ['', [Validators.required, Validators.minLength(4)]],
      recipientDate: [''],
      recipientName: [''],
      num: ['', [Validators.required, Validators.minLength(1)]],
      expectResponseDate: [''],
    });
  }

  addImportFile(data: any): void {
    this.importService.addImportFile(data).subscribe(() => {
      window.location.reload();
    })
  }

  getImportCount(): void {
    this.importService.getImportNumber().subscribe((numberOfImportFiles: any) => {
      this.numberOfImportFile = numberOfImportFiles + 1;
    });
  }
  getAllImportsArchive(){
    this.allFilesService.getByType(1).subscribe((importArchive:any)=>{
      this.importArchive=importArchive
    })
  }

  onSubmit(): void {
    if (this.importForm.valid) {
      this.addImportFile(this.importForm.value);
    }
  }


}
