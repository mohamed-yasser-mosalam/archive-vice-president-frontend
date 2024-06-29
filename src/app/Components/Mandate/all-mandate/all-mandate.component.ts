import {Component, OnInit} from '@angular/core';
import {Showallexport} from "../../../Models/showAllExports/showallexport";
import {ExportServiceService} from "../../../Services/ExportsServices/export-service.service";
import {ActivatedRoute} from "@angular/router";
import {MandateService} from "../../../Services/mandate/mandate.service";
import {Mandate} from "../../../Models/mandate/mandate";

@Component({
  selector: 'app-all-mandate',
  templateUrl: './all-mandate.component.html',
  styleUrls: ['./all-mandate.component.css']
})
export class AllMandateComponent implements OnInit{
  showAllMandate: Mandate[]
  x:any;
  searchText:string

  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }
  constructor(private mandate: MandateService,private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.getAllMandate()
  }

  getAllMandate() {
    return this.mandate.getAllMandate().subscribe((getAllMandate:any)=>{
      this.showAllMandate=getAllMandate;
    })
  }



}
