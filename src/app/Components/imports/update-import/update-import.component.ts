import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ImportServiceService} from "../../../Services/ImportsServices/import-service.service";
import {AuthenticationServiceService} from "../../../Services/Security/authentication-service.service";
import baseUrl from "../../../url";

@Component({
  selector: 'app-update-import',
  templateUrl: './update-import.component.html',
  styleUrls: ['./update-import.component.css']
})
export class UpdateImportComponent implements OnInit {
  pathOfDeleteImage:any
  base=baseUrl+'/'
  showImports: any;
  paths: any[];
  no:any
  x = this.routes.snapshot.params['id']
  roleOfUser = this.auth.getUserRoles()
  editImport = new FormGroup({
    numberOfAttachments: new FormControl(''),
    sender: new FormControl(''),
    incomeDate: new FormControl(''),
    no: new FormControl(''),
    incomingLetterDate: new FormControl(''),
    incomingLetterNumber: new FormControl(''),
    summary: new FormControl(' '),
    receiver: new FormControl(''),
    recipientDate: new FormControl(''),
    responseDate: new FormControl(''),
    responseSide: new FormControl(''),
    responseNumber: new FormControl(''),
    recipientName: new FormControl(''),
    typeNumber: new FormControl(''),
    num: new FormControl(''),
    expectResponseDate: new FormControl('')
  })

  ngOnInit(): void {
    this.importService.getImportById(this.routes.snapshot.params['id']).subscribe((result) => {
      this.editImport = new FormGroup({
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        sender: new FormControl(result['sender']),
        incomeDate: new FormControl(result['incomeDate']),
        no: new FormControl(result['no']),
        incomingLetterDate: new FormControl(result['incomingLetterDate']),
        incomingLetterNumber: new FormControl(result['incomingLetterNumber']),
        summary: new FormControl(result['summary']),
        receiver: new FormControl(result['receiver']),
        recipientDate: new FormControl(result['recipientDate']),
        responseDate: new FormControl(result['responseDate']),
        responseSide: new FormControl(result['responseSide']),
        responseNumber: new FormControl(result['responseNumber']),
        recipientName: new FormControl(result['recipientName']),
        typeNumber: new FormControl(result['typeNumber']),
        num: new FormControl(result['num']),
        expectResponseDate: new FormControl(result['expectResponseDate']),
      })
    })
    this.showImportFile()

  }

  constructor(private importService: ImportServiceService, private routes: ActivatedRoute, private router: Router,
           private auth:AuthenticationServiceService) {
  }

  update() {
    this.importService.updateImport(this.routes.snapshot.params['id'], this.editImport.value).subscribe((result) => {
      this.router.navigate(['/import-pagination'], { queryParams: { page: this.no } });

    })
  }

  showImportFile() {
    this.importService.getImportById(this.routes.snapshot.params['id']).subscribe((getImport: any) => {
      this.showImports = getImport;
      this.paths = this.showImports.paths.map((path: string) => {
        return this.base + path;
      });
      this.pathOfDeleteImage = this.showImports.paths;
      this.no=this.showImports.no
    })
  }

  deleteImage(index: number): void {
    this.importService.deleteImage(this.pathOfDeleteImage,index).subscribe();
    this.paths.splice(index, 1);
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }
}
