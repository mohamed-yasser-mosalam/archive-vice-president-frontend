import {Component, OnInit} from '@angular/core';
import {Mandate} from "../../../Models/mandate/mandate";
import {MandateService} from "../../../Services/mandate/mandate.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-un-special-mandate',
  templateUrl: './un-special-mandate.component.html',
  styleUrls: ['./un-special-mandate.component.css']
})
export class UnSpecialMandateComponent implements OnInit{
  unSpecialMandate: Mandate[]
  searchText:string

  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }
  constructor(private mandate: MandateService,private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.getNotSpecialMandate()
  }

  getNotSpecialMandate() {
    return this.mandate.getAllNotSpecialMandate().subscribe((unSpecialMandate:any)=>{
      this.unSpecialMandate=unSpecialMandate;
    })
  }



}
