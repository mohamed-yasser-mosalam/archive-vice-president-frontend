import { Component } from '@angular/core';
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";

@Component({
  selector: 'app-respons-export',
  templateUrl: './respons-export.component.html',
  styleUrls: ['./respons-export.component.css']
})
export class ResponsExportComponent {
  x=this.routes.snapshot.params['id']

  addExportResponse = new FormGroup({
    incomeDate: new FormControl(''),
    sender: new FormControl(''),
    incomingLetterNumber: new FormControl(''),
    incomingLetterDate: new FormControl(),
    summary: new FormControl(''),
    recipientName: new FormControl(''),
    recipientDate: new FormControl(''),
    num: new FormControl(''),
    expectResponseDate: new FormControl(''),
  })

  ngOnInit(): void {
     this.serviceExport.getExportById(this.routes.snapshot.params['id']).
    subscribe((result) => {
      this.addExportResponse = new FormGroup({
        incomeDate: new FormControl(result['incomeDate']),
        sender: new FormControl(result['sender']),
        incomingLetterNumber: new FormControl(result['incomingLetterNumber']),
        incomingLetterDate: new FormControl(result['incomingLetterDate']),
        summary: new FormControl(result['summary']),
        recipientName: new FormControl(result['recipientName']),
        recipientDate: new FormControl(result['recipientDate']),
        num: new FormControl(result['num']),
        expectResponseDate: new FormControl(result['expectResponseDate']),
      })
    })
  }

  constructor(private serviceExport: ExportServiceService,private routes: ActivatedRoute, private router: Router) {

  }

  addxResponse(data:any) {
    this.serviceExport.addExportResponse(this.routes.snapshot.params['id'],data).subscribe(
      response => this.router.navigateByUrl('/getallexports')
    )
  }

}
