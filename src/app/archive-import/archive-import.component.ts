import { Component } from '@angular/core';
import {Showallimport} from "../Models/showAllImports/showallimport";
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";

@Component({
  selector: 'app-archive-import',
  templateUrl: './archive-import.component.html',
  styleUrls: ['./archive-import.component.css']
})
export class ArchiveImportComponent {
  showAllImport: Showallimport[]=[]
  searchText:string

  constructor(private service:ImportServiceService) {
  }
  ngOnInit(): void {
    this.getAllImports();

  }
  getAllImports() {
    return this.service.getAllImports().subscribe((getAllImport:any)=>{
      this.showAllImport=getAllImport;
    })
  }
  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }

}
