import {Component, OnInit} from '@angular/core';
import {Mandate} from "../../../Models/mandate/mandate";
import {MandateService} from "../../../Services/mandate/mandate.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-accept-mandate',
  templateUrl: './accept-mandate.component.html',
  styleUrls: ['./accept-mandate.component.css']
})
export class AcceptMandateComponent implements OnInit{
  showAllAcceptsMandate: Mandate[]
  x:any;
  searchText:string

  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }
  constructor(private mandate: MandateService,private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.getAllAcceptsMandate()
  }

  getAllAcceptsMandate() {
    return this.mandate.getAllAcceptsMandate().subscribe((getAllAcceptsMandate:any)=>{
      this.showAllAcceptsMandate=getAllAcceptsMandate;
    })
  }



}
