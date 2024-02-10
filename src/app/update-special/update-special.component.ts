import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import {SpecialService} from "../Services/SpecialService/special.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-update-special',
  templateUrl: './update-special.component.html',
  styleUrls: ['./update-special.component.css']
})
export class UpdateSpecialComponent implements OnInit{
  x: any;
  y: any
  id: string;
  page = this.routes.snapshot.params['id'];
  showSpecials: any;
  editSpecial = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    summary: new FormControl(''),
    numberOfAttachments: new FormControl(''),
    incomeDate: new FormControl(''),
    sender: new FormControl(''),
    archiveId: new FormControl(''),
    typeNumber: new FormControl(''),
    num: new FormControl(''),
  })

  ngOnInit(): void {
    this.showSpecialFile();
    this.specialService.getSpecialFileById(this.routes.snapshot.params['id']).subscribe((result) => {
      this.editSpecial = new FormGroup({
        id: new FormControl(result['id']),
        name: new FormControl(result['name']),
        summary: new FormControl(result['summary']),
        numberOfAttachments: new FormControl(result['numberOfAttachments']),
        incomeDate: new FormControl(result['incomeDate']),
        sender: new FormControl(result['sender']),
        archiveId: new FormControl(result['archiveId']),
        typeNumber: new FormControl(result['typeNumber']),
        num: new FormControl(result['num']),
      })
    })

  }

  constructor(private specialService: SpecialService, private routes: ActivatedRoute, private router: Router,
              private http: HttpClient
  ) {
  }


  showSpecialFile() {
    this.specialService.getSpecialFileById(this.page).subscribe((getSpecial: any) => {
      this.showSpecials = getSpecial;
     })
  }
  update() {
    this.specialService.updateSpecial(this.editSpecial.value).subscribe((result) => {
      this.router.navigate([`/special-pagination?id/`,this.routes.snapshot.params['id']]);
     })

  }
  onImageSelected(event) {
    const file = event.target.files[0]
    const formDate: FormData = new FormData()
    this.x = formDate.append("files", file)
    this.http.post(`http://localhost:1200/image/multipleFiles?id=${this.routes.snapshot.params['id']}&pathType=exports`, formDate).subscribe(
      (result) => {
      })
  }
}
