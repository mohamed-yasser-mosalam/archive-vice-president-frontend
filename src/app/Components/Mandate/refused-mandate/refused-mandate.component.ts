import {Component, OnInit} from '@angular/core';
import {Mandate} from "../../../Models/mandate/mandate";
import {MandateService} from "../../../Services/mandate/mandate.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-refused-mandate',
  templateUrl: './refused-mandate.component.html',
  styleUrls: ['./refused-mandate.component.css']
})
export class RefusedMandateComponent implements OnInit{
  showAllRefusedMandate: Mandate[]
  x:any;
  searchText:string

  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }
  constructor(private mandate: MandateService,private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.getAllRefusedMandate()
  }

  getAllRefusedMandate() {
    return this.mandate.getAllRefusedMandate().subscribe((getAllRefusedMandate:any)=>{
      this.showAllRefusedMandate=getAllRefusedMandate;
    })
  }



}
