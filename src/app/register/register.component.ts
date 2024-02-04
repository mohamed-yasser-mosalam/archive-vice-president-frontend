import {Component, numberAttribute} from '@angular/core';
import {RegisterService} from "../Services/Register/register.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   id:number
  x:any
    constructor(private registerService:RegisterService,
                private route:Router,
                private http:HttpClient,
                private serviceExport: ExportServiceService,private router:Router,) {
    }
    createUser(data:any){
      this.serviceExport.createUser(data).subscribe(
        response => this.route.navigateByUrl('/home')
      )
      console.log(this.x)
    }

  onImageSelected(event){
    const file=event.target.files[0]
    const formDate:FormData=new FormData()
     this.x=formDate.append("file",file)
    formDate.append('dto',this.x)
    // this.x=formDate.get("file")
    console.log(this.x)
  }


    // OnImageSelected(event){
    //   var file=event.target.files[0]
    //   const formDate:FormData=new FormData()
    //   formDate.append("file",file.name)
    //   this.http.post('http://localhost:1200/image/upload?id=5&pathType=users',formDate.get(file)).subscribe(
    //     response=>{
    //       console.log("successfully")
    //     }
    //   )
    //    console.log(formDate.get(file))
    // }
    //


  AddExportFile(data: any) {
    this.serviceExport.addExportFile(data).subscribe(
      response => this.router.navigateByUrl('/getallexports')
    )
  }


}
