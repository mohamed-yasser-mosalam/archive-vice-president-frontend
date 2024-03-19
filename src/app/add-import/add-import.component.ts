import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-import',
  templateUrl: './add-import.component.html',
  styleUrls: ['./add-import.component.css']
})
export class AddImportComponent implements OnInit{
 Imports: any;
  numberOfImportFile:any

  constructor(private serviceImport: ImportServiceService,private router:Router, private http:HttpClient) {
    this.serviceImport.getAllImports().subscribe((data) => {
      this.Imports = data;
    });
  }

  addImportFile(data: any) {

    this.serviceImport.addImportFile(data).subscribe(
      response => this.router.navigateByUrl('/home')
    )
  }
  getImportCount(): void {
    this.http.get('http://localhost:1200/import/count').subscribe((numberOfImportFiles: any) => {
      this.numberOfImportFile = numberOfImportFiles+1;
    });
  }

  ngOnInit(): void {
    this.getImportCount()
  }
}
