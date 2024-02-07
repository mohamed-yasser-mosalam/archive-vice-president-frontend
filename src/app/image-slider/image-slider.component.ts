import {Component, OnInit} from '@angular/core';
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {Showallexport} from "../Models/showAllExports/showallexport";

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit{
  showAttachments: Showallexport[]=[];
  items:[number, number, number]=[1,2,3];
   constructor(private exportService:ExportServiceService) {
   }
  ngOnInit(): void {
     this.getAttachments();
   }
  getAttachments(){
     this.exportService.getAllExports().subscribe((getAllAttachments:any)=>{
       this.showAttachments=getAllAttachments;
     })
  }





}
