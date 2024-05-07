import {Component, OnInit} from '@angular/core';
import {Showallimport} from "../../../Models/showAllImports/showallimport";
import {ImportantLetterServiceService} from "../../../Services/ImportantLetter/important-letter-service.service";

@Component({
  selector: 'app-important-letter',
  templateUrl: './important-letter.component.html',
  styleUrls: ['./important-letter.component.css']
})
export class ImportantLetterComponent implements OnInit{
  showAllImportant: Showallimport[]=[]
  searchText:string

  constructor(private service:ImportantLetterServiceService) {
  }
  ngOnInit(): void {
    this.getAllImportants()
  }
  getAllImportants() {
    return this.service.getAllImportantLetter().subscribe((getAllImportantLetter:any)=>{
      this.showAllImportant=getAllImportantLetter;
    })
  }
  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }


}
