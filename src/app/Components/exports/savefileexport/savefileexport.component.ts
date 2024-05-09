import {Component, OnInit} from '@angular/core';
import {ExportServiceService} from "../../../Services/ExportsServices/export-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-savefileexport',
  templateUrl: './savefileexport.component.html',
  styleUrls: ['./savefileexport.component.css']
})
export class SavefileexportComponent implements OnInit{
  constructor(private serviceExport: ExportServiceService,private fb: FormBuilder,
    private routes: ActivatedRoute, private router: Router,) {
  }
  saveFileForm: FormGroup;
  id=this.routes.snapshot.params['id']
  ngOnInit(): void {
    this.saveFileForm = this.fb.group({
      num: ['', [Validators.required, Validators.minLength(1)]],
    });
  }
  addSaveFile(data: any) {
    this.serviceExport.addSaveFile(this.id,data).subscribe(() =>
      this.router.navigateByUrl('/special-file'))
  }
  onSubmit(): void {
    if (this.saveFileForm.valid) {
    this.addSaveFile(this.saveFileForm.value);
  }
}
}
