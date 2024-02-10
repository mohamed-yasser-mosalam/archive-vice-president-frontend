import {Component, OnInit} from '@angular/core';
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import { Router} from "@angular/router";
import {FormArray, FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-add-export',
  templateUrl: './add-export.component.html',
  styleUrls: ['./add-export.component.css']
})
export class AddExportComponent implements OnInit{

  constructor(private serviceExport: ExportServiceService,private router:Router,
              private formbuilder:FormBuilder
              ) {

  }

  AddExportFile(data: any) {
    this.serviceExport.addExportFile(data).subscribe(
      response => this.router.navigateByUrl('/getallexports')
    )
   }
  form=this.formbuilder.group({
    items:this.formbuilder.array([]),
  })
  get items( ){
    return this.form.get("items") as FormArray
  }

  deleteItems(index:number){
    this.items.removeAt(index)
  }

  addItem(){
    this.items.push( this.formbuilder.group({
      name:['']
    }))
  }

  ngOnInit(): void {
    this.addItem()
  }


}
