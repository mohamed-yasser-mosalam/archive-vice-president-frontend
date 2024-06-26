import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Special} from "../../../special";
import {SpecialService} from "../../../Services/SpecialService/special.service";


@Component({
  selector: 'app-update-special',
  templateUrl: './update-special.component.html',
  styleUrls: ['./update-special.component.css']
})
export class UpdateSpecialComponent implements OnInit {
  no: any;
  page = this.routes.snapshot.params['id'];
  form: FormGroup;
  paths: []
  special: Special;


  constructor(private fb: FormBuilder, private specialService: SpecialService, private router: Router,
              private routes: ActivatedRoute) {
  }


  getSpecial() {
    this.specialService.getSpecialsById(this.page).subscribe((res: any) => {
      this.special = res;
      this.no = this.special.no;
    });
  }

  onSubmit(formData: any) {
    this.specialService.updateSpecial(this.routes.snapshot.params['id'],formData).subscribe((result) => {
      this.router.navigate([`/special-pagination?page=/`, this.no])
    })
   console.log(formData)
  }

  // updateSpecial() {
  //   this.specialService.updateSpecial(this.page, this.specialForm.value).subscribe((result) => {
  //     this.router.navigate([`/special-pagination?page=/`, this.no])
  //   })
  //
  // }


  get subjects() {
    return this.form.get('subjects') as FormArray;
  }


  ngOnInit(): void {
    this.getSpecial();
    this.page = this.routes.snapshot.params['id'];

  }

}

