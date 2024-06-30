import {Component, OnInit} from '@angular/core';
import {Mandate} from "../../../Models/mandate/mandate";
import {MandateService} from "../../../Services/mandate/mandate.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-current-mandate',
  templateUrl: './current-mandate.component.html',
  styleUrls: ['./current-mandate.component.css']
})
export class CurrentMandateComponent implements OnInit{
  showAllCurrentMandate: Mandate[]
  searchText:string

  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }
  constructor(private mandate: MandateService,private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.getCurrentMandate()
  }

  getCurrentMandate() {
    return this.mandate.getCurrentMandate().subscribe((getCurrentMandate:any)=>{
      this.showAllCurrentMandate=getCurrentMandate;
    })
  }



}
