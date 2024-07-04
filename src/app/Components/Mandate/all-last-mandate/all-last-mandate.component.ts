import {Component, OnInit} from '@angular/core';
import {Mandate} from "../../../Models/mandate/mandate";
import {MandateService} from "../../../Services/mandate/mandate.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-last-mandate',
  templateUrl: './all-last-mandate.component.html',
  styleUrls: ['./all-last-mandate.component.css']
})
export class AllLastMandateComponent implements OnInit{
  showAllLastMandate: Mandate[]
  x:any;
  searchText:string

  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }
  constructor(private mandate: MandateService,private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.getAllLastMandate()
  }

  getAllLastMandate() {
    return this.mandate.getAllLastMandate().subscribe((getAllLastMandate:any)=>{
      this.showAllLastMandate=getAllLastMandate;
    })
  }



}
