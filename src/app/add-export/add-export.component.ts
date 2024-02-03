import {Component} from '@angular/core';
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import { Router} from "@angular/router";


@Component({
  selector: 'app-add-export',
  templateUrl: './add-export.component.html',
  styleUrls: ['./add-export.component.css']
})
export class AddExportComponent{

  constructor(private serviceExport: ExportServiceService,private router:Router,
              ) {

  }


  AddExportFile(data: any) {
    this.serviceExport.addExportFile(data).subscribe(
      response => this.router.navigateByUrl('/getallexports')
    )
  }



}
