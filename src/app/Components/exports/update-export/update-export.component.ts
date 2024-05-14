import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ExportServiceService} from "../../../Services/ExportsServices/export-service.service";
import {AuthenticationServiceService} from "../../../Services/Security/authentication-service.service";
import baseUrl from "../../../url";

@Component({
  selector: 'app-update-export',
  templateUrl: './update-export.component.html',
  styleUrls: ['./update-export.component.css']
})
export class UpdateExportComponent implements OnInit {
  pathOfDeleteImage:any
  base=baseUrl+'/'
  showExports: any;
  paths: string[];
  id = this.routes.snapshot.params['id']
  no:number;
  roleOfUser = this.auth.getUserRoles()
  editExport = new FormGroup({
    date: new FormControl(''),
    receiver: new FormControl(''),
    numberOfAttachments: new FormControl(''),
    typeNumber: new FormControl(''),
    no: new FormControl(''),
    num: new FormControl(''),
    recipientName: new FormControl(''),
    recipientDate: new FormControl(''),
    summary: new FormControl(''),
    urgentDate: new FormControl(''),
    urgentNum: new FormControl(''),
    responseDate: new FormControl(''),
    responseNumber: new FormControl(''),
  })

  ngOnInit(): void {
    this.exportService.getExportsById(this.id).subscribe((result) => {
      this.editExport = new FormGroup({
        date: new FormControl(result['date']),
        receiver: new FormControl(result['receiver']),
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        typeNumber: new FormControl(result['typeNumber']),
        no: new FormControl(result['no']),
        num: new FormControl(result['num']),
        recipientName: new FormControl(result['recipientName']),
        recipientDate: new FormControl(result['recipientDate']),
        summary: new FormControl(result['summary']),
        urgentDate: new FormControl(result['urgentDate']),
        urgentNum: new FormControl(result['urgentNum']),
        responseDate: new FormControl(result['responseDate']),
        responseNumber: new FormControl(result['responseNumber'])
      })
    })
    this.showExportFile()
  }

  constructor(private exportService: ExportServiceService, private routes: ActivatedRoute, private router: Router,
              private auth:AuthenticationServiceService
   ) {
  }

  update() {
    this.exportService.updateExport(this.id, this.editExport.value)
      .subscribe(( ) => {
       this.router.navigate([`/export-pagination?page=/`, this.no])
    })
  }

  showExportFile() {
    this.exportService.getExportById(this.id).subscribe((getExport: any) => {
      this.showExports = getExport;
      this.paths = this.showExports.paths.map((path: string) => {
        return this.base + path;
      });
      this.pathOfDeleteImage = this.showExports.paths;
      this.no=this.showExports.no;
     })
  }
  deleteImage(index: number): void {
    this.exportService.deleteImage(this.pathOfDeleteImage,index).subscribe();
    this.paths.splice(index, 1);
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }
}
