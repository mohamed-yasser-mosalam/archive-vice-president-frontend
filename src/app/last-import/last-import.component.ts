import {Component, OnInit} from '@angular/core';
import {Showallimport} from "../Models/showAllImports/showallimport";
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";

@Component({
  selector: 'app-last-import',
  templateUrl: './last-import.component.html',
  styleUrls: ['./last-import.component.css']
})
export class LastImportComponent implements OnInit{
  showAllImport: Showallimport[]=[]
  searchText:string

  constructor(private service:ImportServiceService) {
  }
  ngOnInit(): void {
    this.getAllLastImports();

  }
  getAllLastImports() {
    return this.service.getAllLastImports().subscribe((getAllImport:any)=>{
      this.showAllImport=getAllImport;
    })
  }
  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }

}
