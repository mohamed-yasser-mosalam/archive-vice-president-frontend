import {Component, OnInit} from '@angular/core';
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-urgent-export',
  templateUrl: './urgent-export.component.html',
  styleUrls: ['./urgent-export.component.css']
})
export class UrgentExportComponent  implements OnInit{
  x=this.routes.snapshot.params['id']
  addUrgent = new FormGroup({
    receiver: new FormControl(''),
    summary: new FormControl(''),
    recipientName: new FormControl(''),
    num: new FormControl()
  })

  ngOnInit(): void {
    this.serviceExport.getExportById(this.routes.snapshot.params['id']).
    subscribe((result) => {
      this.addUrgent = new FormGroup({
        receiver: new FormControl(result['receiver']),
        summary: new FormControl(result['summary']),
        recipientName: new FormControl(result['recipientName']),
        num: new FormControl(result['num'])
      })
    })
  }
  constructor(private serviceExport: ExportServiceService,private routes: ActivatedRoute, private router: Router) {

  }


  addUrgentFile(data:any) {
    this.serviceExport.addUrgentFile(this.routes.snapshot.params['id'],data).subscribe(
      response => this.router.navigateByUrl('/getallexports')
    )
  }

}
