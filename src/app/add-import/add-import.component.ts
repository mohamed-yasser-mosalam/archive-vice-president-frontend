import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";

@Component({
  selector: 'app-add-import',
  templateUrl: './add-import.component.html',
  styleUrls: ['./add-import.component.css']
})
export class AddImportComponent {
 Imports: any;

  constructor(private serviceImport: ImportServiceService,private router:Router) {
    this.serviceImport.getAllImports().subscribe((data) => {
      this.Imports = data;
    });
  }

  addImportFile(data: any) {

    this.serviceImport.addImportFile(data).subscribe(
      response => this.router.navigateByUrl('/getallImports')
    )
  }
}
