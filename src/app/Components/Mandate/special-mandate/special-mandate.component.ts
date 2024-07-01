import {Component, OnInit} from '@angular/core';
import {Mandate} from "../../../Models/mandate/mandate";
import {MandateService} from "../../../Services/mandate/mandate.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-special-mandate',
  templateUrl: './special-mandate.component.html',
  styleUrls: ['./special-mandate.component.css']
})
export class SpecialMandateComponent implements OnInit{
  showAllSpecialMandate: Mandate[]
  x:any;
  searchText:string

  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }
  constructor(private mandate: MandateService,private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.getAllSpecialMandate()
  }

  getAllSpecialMandate() {
    return this.mandate.getAllSpecialMandate().subscribe((getAllSpecialMandate:any)=>{
      this.showAllSpecialMandate=getAllSpecialMandate;
    })
  }



}
