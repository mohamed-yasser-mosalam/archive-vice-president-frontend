import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";

@Component({
  selector: 'app-update-import',
  templateUrl: './update-import.component.html',
  styleUrls: ['./update-import.component.css']
})
export class UpdateImportComponent implements OnInit{

  editImport = new FormGroup({
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
    console.log(this.routes.snapshot.params['id'])
    this.serviceImport.getImportById(this.routes.snapshot.params['id']).
    subscribe((result) => {
      this.editImport = new FormGroup({
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

  constructor(private serviceImport: ImportServiceService, private routes: ActivatedRoute, private router: Router) {
  }

  update() {
    console.warn(this.editImport.value)
    this.serviceImport.updateImport(this.routes.snapshot.params['id'], this.editImport.value).subscribe((result) => {
      console.warn(result),
          this.router.navigateByUrl('/getallImports')

    })
  }

}
