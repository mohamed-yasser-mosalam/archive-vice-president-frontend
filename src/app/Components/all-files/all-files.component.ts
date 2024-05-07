import {Component, OnInit} from '@angular/core';
import {AllFiles} from "../../Models/AllFiles/all-files";
import {AllFilesService} from "../../Services/AllFile/all-files.service";

@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.css']
})
export class AllFilesComponent  implements OnInit{
  AllFiles:AllFiles[]=[]
  searchText:string

  constructor(private AllFilesService:AllFilesService) {
  }
  getAllFiles(){
    return this.AllFilesService.getAllFile().subscribe((getAllFile:any)=> {
      this.AllFiles = getAllFile;
    })
  }

  ngOnInit(): void {
    this.getAllFiles()
  }
  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }
}



