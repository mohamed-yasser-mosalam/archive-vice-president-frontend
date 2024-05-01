import {Component, OnInit} from '@angular/core';
import {Showallimport} from "../Models/showAllImports/showallimport";
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-archive-import',
  templateUrl: './archive-import.component.html',
  styleUrls: ['./archive-import.component.css']
})
export class ArchiveImportComponent implements OnInit{
  showAllImport: Showallimport[]=[]
  searchText:string;
  id=this.routes.snapshot.params['id']

  constructor(private importservice:ImportServiceService,private routes:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getAllImports();

  }
  getAllImports() {
    return this.importservice.getImportArchiveFile(this.id).subscribe((getAllImport:any)=>{
      this.showAllImport=getAllImport;
    })
  }
  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }

}
