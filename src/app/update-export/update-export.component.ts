import {Component, OnInit, ViewChild} from '@angular/core';
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-update-export',
  templateUrl: './update-export.component.html',
  styleUrls: ['./update-export.component.css']
})
export class UpdateExportComponent implements OnInit {
  x=this.routes.snapshot.params['id']
  editExport = new FormGroup({
    date:new FormControl(''),
    receiver: new FormControl(''),
    numberOfAttachments:new FormControl(''),
    typeNumber: new FormControl(''),
    id: new FormControl(''),
    num: new FormControl(''),
    recipientName: new FormControl(''),
    summary: new FormControl(''),
    urgentDate: new FormControl(''),
    urgentNum:new FormControl( ''),
    responseDate: new FormControl(''),
    responseNumber: new FormControl(''),
  })

  ngOnInit(): void {
     this.serviceExport.getExportById(this.routes.snapshot.params['id']).
      subscribe((result) => {
       this.editExport = new FormGroup({
         date:new FormControl(result['date']),
         receiver: new FormControl(result['receiver']),
         numberOfAttachments:new FormControl(result['numberOfAttachments']),
         typeNumber: new FormControl(result['typeNumber']),
         id: new FormControl(result['id']),
         num: new FormControl(result['num']),
         recipientName: new FormControl(result['recipientName']),
         summary: new FormControl(result['summary']),
         urgentDate: new FormControl(result['urgentDate']),
         urgentNum:new FormControl( result['urgentNum']),
         responseDate: new FormControl(result['responseDate']),
         responseNumber: new FormControl(result['responseNumber'])
       })
     })
  }

  constructor(private serviceExport: ExportServiceService, private routes: ActivatedRoute, private router: Router,
              private http:HttpClient
              ) {
  }

  update() {
    this.serviceExport.updateExport(this.routes.snapshot.params['id'],this.editExport.value).subscribe((result) => {
      this.router.navigate([`/export-pagination?id/`,this.routes.snapshot.params['id']])
    })

  }
  onImageSelected(event) {
    const file = event.target.files[0]
    const formDate: FormData = new FormData()
    this.x = formDate.append("files", file)
    this.http.post(`http://localhost:1200/image/multipleFiles?id=${this.routes.snapshot.params['id']}&pathType=exports`, formDate).subscribe(
      (result) => {
      })
   }
}


