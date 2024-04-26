import {Component, OnInit} from '@angular/core';
import {DeanDecision} from "../Models/DeanDecision/dean-decision";
import {DeandecisionService} from "../Services/DeanDecision/deandecision.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-last-dean-decision',
  templateUrl: './last-dean-decision.component.html',
  styleUrls: ['./last-dean-decision.component.css']
})
export class LastDeanDecisionComponent implements OnInit{
  deanDecision: DeanDecision[]=[]
  searchText:string

  constructor(private deanService:DeandecisionService,private routes:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getAllDeanDecision();

  }
  getAllDeanDecision() {
    return this.deanService.getAllLastDeanDecision().subscribe((getAllDeanDecision:any)=>{
      this.deanDecision=getAllDeanDecision;
    })
  }
  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }

}
