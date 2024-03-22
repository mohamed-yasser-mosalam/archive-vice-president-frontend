import {Component, OnInit} from '@angular/core';
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-urgent-export',
  templateUrl: './urgent-export.component.html',
  styleUrls: ['./urgent-export.component.css']
})
export class UrgentExportComponent  implements OnInit{
  numberOfExportFile:any
  x=this.routes.snapshot.params['id']
  addUrgent = new FormGroup({
    receiver: new FormControl(''),
    summary: new FormControl(''),
    recipientName: new FormControl(''),
    num: new FormControl(),
    no: new FormControl()
  })

  ngOnInit(): void {
    this.getExportCount()
    this.serviceExport.getExportById(this.routes.snapshot.params['id']).
    subscribe((result) => {
      this.addUrgent = new FormGroup({
        receiver: new FormControl(result['receiver']),
        summary: new FormControl(result['summary']),
        recipientName: new FormControl(result['recipientName']),
        num: new FormControl(result['num']),
        no: new FormControl(result['no'])
      })

    })
  }
  constructor(private serviceExport: ExportServiceService,private routes: ActivatedRoute, private router: Router,private http:HttpClient) {

  }

  addUrgentFile(data:any) {
    this.serviceExport.addUrgentFile(this.routes.snapshot.params['id'],data).subscribe(
      // response => this.router.navigate([`/export-pagination?id/`,this.x])
      response => this.router.navigateByUrl('/home')

    )
  }
  getExportCount(): void {
    this.http.get('http://localhost:1200/export/count').subscribe((numberOfExportFiles: any) => {
      this.numberOfExportFile = numberOfExportFiles+1;
    });
  }

}
