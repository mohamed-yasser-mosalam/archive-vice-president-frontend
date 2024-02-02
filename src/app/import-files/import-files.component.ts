import {Component, OnInit} from '@angular/core';
import {Showallexport} from "../Models/showAllExports/showallexport";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {Showallimport} from "../Models/showAllImports/showallimport";
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";

@Component({
  selector: 'app-import-files',
  templateUrl: './import-files.component.html',
  styleUrls: ['./import-files.component.css']
})
export class ImportFilesComponent implements OnInit{
  showAllImport: Showallimport[]=[]

  constructor(private service:ImportServiceService) {
  }
  ngOnInit(): void {
    this.getAllImports()
  }
  getAllImports() {
    return this.service.getAllImports().subscribe((getAllImport:any)=>{
      this.showAllImport=getAllImport;
    })
  }

}
