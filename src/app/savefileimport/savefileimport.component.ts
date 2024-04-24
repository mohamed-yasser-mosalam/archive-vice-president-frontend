import {Component, OnInit} from '@angular/core';
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";

@Component({
  selector: 'app-savefileimport',
  templateUrl: './savefileimport.component.html',
  styleUrls: ['./savefileimport.component.css']
})
export class SavefileimportComponent implements OnInit{
  constructor(private importService: ImportServiceService,private fb: FormBuilder,
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
    this.importService.addSaveFile(this.id,data).subscribe(() =>
      this.router.navigateByUrl('/specialfile'))
  }
  onSubmit(): void {
    if (this.saveFileForm.valid) {
      this.addSaveFile(this.saveFileForm.value);
    }
  }
}
