import {Component, OnInit} from '@angular/core';
import {Showallimport} from "../Models/showAllImports/showallimport";
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";
import {ActivatedRoute} from "@angular/router";
import {DeanDecision} from "../Models/DeanDecision/dean-decision";
import {DeandecisionService} from "../Services/DeanDecision/deandecision.service";

@Component({
  selector: 'app-deandecision',
  templateUrl: './deandecision.component.html',
  styleUrls: ['./deandecision.component.css']
})
export class DeandecisionComponent implements OnInit{
  deanDecision: DeanDecision[]=[]
  searchText:string

  constructor(private deanService:DeandecisionService,private routes:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getAllDeanDecision();

  }
  getAllDeanDecision() {
    return this.deanService.getDeanDecision().subscribe((getAllDeanDecision:any)=>{
      this.deanDecision=getAllDeanDecision;
    })
  }
  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }

}
