import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";

@Component({
  selector: 'app-respons-import',
  templateUrl: './respons-import.component.html',
  styleUrls: ['./respons-import.component.css']
})
export class ResponsImportComponent {
  x=this.routes.snapshot.params['id']
  addResponse = new FormGroup({
    receiver: new FormControl(''),
    summary: new FormControl(''),
    recipientName: new FormControl(''),
    num: new FormControl()
  })

  ngOnInit(): void {
    this.serviceImport.getImportById(this.routes.snapshot.params['id']).
    subscribe((result) => {
      this.addResponse = new FormGroup({
        receiver: new FormControl(result['receiver']),
        summary: new FormControl(result['summary']),
        recipientName: new FormControl(result['recipientName']),
        num: new FormControl(result['num'])
      })
    })
  }
  constructor(private serviceImport: ImportServiceService,private routes: ActivatedRoute, private router: Router) {

  }


  addImportResponse(data:any) {
    this.serviceImport.addImportResponse(this.routes.snapshot.params['id'],data).subscribe(
      response => this.router.navigateByUrl('/getallexports')
    )
  }


}


