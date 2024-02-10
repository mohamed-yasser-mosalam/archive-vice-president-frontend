import { Component } from '@angular/core';
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

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
  constructor(private serviceImport: ImportServiceService,private router:Router,
              private http: HttpClient, private routes: ActivatedRoute) {
    this.serviceImport.getAllImports().subscribe((data) => {
      this.Imports = data;
    });
  }

  addImportFile(data: any) {

    this.serviceImport.addImportFile(data).subscribe(
      response => this.router.navigateByUrl('/home')
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
