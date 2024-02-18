import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-update-import',
  templateUrl: './update-import.component.html',
  styleUrls: ['./update-import.component.css']
})
export class UpdateImportComponent implements OnInit{
  showImports: any;
  paths:string;
  x=this.routes.snapshot.params['id']
  editImport = new FormGroup({
    numberOfAttachments: new FormControl(''),
    sender: new FormControl(''),
    incomeDate: new FormControl(''),
    id: new FormControl(''),
    incomingLetterDate: new FormControl(''),
    incomingLetterNumber: new FormControl(''),
    summary: new FormControl(' '),
    receiver: new FormControl(''),
    recipientDate: new FormControl(''),
    responseDate: new FormControl(''),
    responseSide: new FormControl(''),
    responseNumber: new FormControl('' ),
    recipientName: new FormControl(''),
    typeNumber: new FormControl(''),
    num: new FormControl(''),
    expectResponseDate:new FormControl('')
  })

  ngOnInit(): void {
     this.serviceImport.getImportById(this.routes.snapshot.params['id']).
     subscribe((result) => {
      this.editImport = new FormGroup({
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        sender: new FormControl(result['sender']),
        incomeDate: new FormControl(result['incomeDate']),
        id: new FormControl(result['id']),
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
        expectResponseDate:new FormControl(result['expectResponseDate']),
      })
    })
    this.showImportFile()

  }

  constructor(private serviceImport: ImportServiceService, private routes: ActivatedRoute, private router: Router,
              private http:HttpClient) {
  }

  update() {
     this.serviceImport.updateImport(this.routes.snapshot.params['id'], this.editImport.value).subscribe((result) => {
           this.router.navigate([`/import-pagination?id/`,this.routes.snapshot.params['id']])

    })
  }
  showImportFile() {
    this.serviceImport.getImportById(this.routes.snapshot.params['id']).subscribe((getImport: any) => {
      this.showImports = getImport;
      this.paths = this.showImports.paths
    })
  }
}
