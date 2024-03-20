import {Component, OnInit} from '@angular/core';
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import { Router} from "@angular/router";
import {FormArray, FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-add-export',
  templateUrl: './add-export.component.html',
  styleUrls: ['./add-export.component.css']
})
export class AddExportComponent  implements OnInit{
  numberOfExportFile:any
  constructor(private serviceExport: ExportServiceService, private router: Router,
              private http:HttpClient

   ) {

  }

  AddExportFile(data: any) {
    this.serviceExport.addExportFile(data).subscribe(
     )

  }
  getExportCount(): void {
    this.http.get('http://localhost:1200/export/count').subscribe((numberOfExportFiles: any) => {
      this.numberOfExportFile = numberOfExportFiles+1;
    });
  }

  ngOnInit(): void {
    this.getExportCount();
  }
}
