import { Component } from '@angular/core';
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {SpecialService} from "../Services/SpecialService/special.service";

@Component({
  selector: 'app-add-special',
  templateUrl: './add-special.component.html',
  styleUrls: ['./add-special.component.css']
})
export class AddSpecialComponent {
  Imports: any;
  x: any;
  y: any
  id: string;
  page = this.routes.snapshot.params['id'];
  constructor(private specialService: SpecialService,private router:Router,
              private http: HttpClient, private routes: ActivatedRoute) {

  }

  addImportFile(data: any) {
    this.specialService.addSpecialFile(data).subscribe(
      response => this.router.navigateByUrl('/getallexports')
    )
   }

  onImageSelected(event) {
    const file = event.target.files[0]
    const formDate: FormData = new FormData()
    this.x = formDate.append("files", file)
    this.http.post(`http://localhost:1200/image/multipleFiles?id=${this.page}&pathType=imports`, formDate).subscribe(
      (result) => {
      })

  }



}
