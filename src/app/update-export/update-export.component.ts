import {Component, OnInit, ViewChild} from '@angular/core';
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {HttpClient} from "@angular/common/http";
import {NgConfirmService} from "ng-confirm-box";

@Component({
  selector: 'app-update-export',
  templateUrl: './update-export.component.html',
  styleUrls: ['./update-export.component.css']
})
export class UpdateExportComponent implements OnInit {
  showExports: any;
  paths:any[]
  x = this.routes.snapshot.params['id']
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
    summary: new FormControl(''),
    urgentDate: new FormControl(''),
    urgentNum: new FormControl(''),
    responseDate: new FormControl(''),
    responseNumber: new FormControl(''),
  })

  ngOnInit(): void {
    this.serviceExport.getExportByPagination(this.routes.snapshot.params['id']).subscribe((result) => {
      this.editExport = new FormGroup({
        date: new FormControl(result['date']),
        receiver: new FormControl(result['receiver']),
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        typeNumber: new FormControl(result['typeNumber']),
        no: new FormControl(result['no']),
        num: new FormControl(result['num']),
        recipientName: new FormControl(result['recipientName']),
        summary: new FormControl(result['summary']),
        urgentDate: new FormControl(result['urgentDate']),
        urgentNum: new FormControl(result['urgentNum']),
        responseDate: new FormControl(result['responseDate']),
        responseNumber: new FormControl(result['responseNumber'])
      })
    })
    this.showExportFile()
  }

  constructor(private serviceExport: ExportServiceService, private routes: ActivatedRoute, private router: Router,
              private http:HttpClient,private auth:AuthenticationServiceService
   ) {
  }

  update() {
    this.serviceExport.updateExport(this.routes.snapshot.params['id'], this.editExport.value)
      .subscribe((result) => {
       this.router.navigate([`/export-pagination?page/`, this.no])
    })
  }

  showExportFile() {
    this.serviceExport.getExportById(this.routes.snapshot.params['id']).subscribe((getExport: any) => {
      this.showExports = getExport;
      this.paths = this.showExports.paths;
      this.no=this.showExports.no
    })
  }
  deleteImage(index: number): void {
    this.http.delete(`http://localhost:1200/image/image?imagePath=${this.paths[index]}`).subscribe()
    this.paths.splice(index, 1);
  }
}
