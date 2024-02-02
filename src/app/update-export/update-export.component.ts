import {Component, OnInit, ViewChild} from '@angular/core';
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-export',
  templateUrl: './update-export.component.html',
  styleUrls: ['./update-export.component.css']
})
export class UpdateExportComponent implements OnInit {
  x=this.routes.snapshot.params['id']
  editExport = new FormGroup({
    date:new FormControl(''),
    numberOfAttachments:new FormControl(' '),
    receiver: new FormControl(''),
    summary: new FormControl(''),
    recipientName: new FormControl(''),
    num: new FormControl()
  })

  ngOnInit(): void {
     this.serviceExport.getExportById(this.routes.snapshot.params['id']).
      subscribe((result) => {
      this.editExport = new FormGroup({
        date:new FormControl(result['date']),
        numberOfAttachments:new FormControl(result['numberOfAttachments']),
        receiver: new FormControl(result['receiver']),
        summary: new FormControl(result['summary']),
        recipientName: new FormControl(result['recipientName']),
        num: new FormControl(result['num'])
      })
    })
  }

  constructor(private serviceExport: ExportServiceService, private routes: ActivatedRoute, private router: Router) {
  }

  update() {
     this.serviceExport.updateExport(this.routes.snapshot.params['id'], this.editExport.value).subscribe((result) => {
          this.router.navigateByUrl('/getallexports')

    })
  }

}

