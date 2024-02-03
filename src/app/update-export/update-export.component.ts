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
    numberOfAttachments: new FormControl(''),
    sender: new FormControl(''),
    incomeDate: new FormControl(''),
    num: new FormControl(''),
    incomingLetterDate: new FormControl(''),
    incomingLetterNumber: new FormControl(''),
    summary: new FormControl(' '),
    receiver: new FormControl(''),
    recipientDate: new FormControl(''),
    responseDate: new FormControl(''),
    responseSide: new FormControl(''),
    recipientName: new FormControl(''),
    archiveId: new FormControl(''),

  })

  ngOnInit(): void {
     this.serviceExport.getExportById(this.routes.snapshot.params['id']).
      subscribe((result) => {
      this.editExport = new FormGroup({
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        sender: new FormControl(result['sender']),
        incomeDate: new FormControl(result['incomeDate']),
        num: new FormControl(result['num']),
        incomingLetterDate: new FormControl(result['incomingLetterDate']),
        incomingLetterNumber: new FormControl(result['incomingLetterNumber']),
        summary: new FormControl(result['summary']),
        receiver: new FormControl(result['receiver']),
        recipientDate: new FormControl(result['recipientDate']),
        responseDate: new FormControl(result['responseDate']),
        responseSide: new FormControl(result['responseSide']),
        recipientName: new FormControl(result['recipientName']),
        archiveId: new FormControl(result['archiveId']),
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

