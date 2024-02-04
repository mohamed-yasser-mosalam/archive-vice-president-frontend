import {Component, OnInit, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Showallexport} from "../Models/showAllExports/showallexport";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {HttpClient} from "@angular/common/http";
  @Component({
  selector: 'app-export-files',
  templateUrl:'./export-files.component.html',
  styleUrls: ['./export-files.component.css']
})
export class ExportFilesComponent implements OnInit{
  showAllExport: Showallexport[]=[];
    page: number=1;
    x:any;
     constructor(private service: ExportServiceService, private http: HttpClient){

  }
  ngOnInit(): void {
    this.getAllExports();
   }

  getAllExports() {
    return this.service.getAllExports().subscribe((getAllExport:any)=>{
      this.showAllExport=getAllExport;
    })
  }

    onImageSelected(event){
      const file=event.target.files[0]
      const formDate:FormData=new FormData()
      this.x= formDate.append("file",file)
      console.log(this.x)
      this.http.post('http://localhost:1200/image/upload?id=5&pathType=users',formDate).subscribe(
        response=>{
          console.log("successfully")
        }
      )
    }
  }
