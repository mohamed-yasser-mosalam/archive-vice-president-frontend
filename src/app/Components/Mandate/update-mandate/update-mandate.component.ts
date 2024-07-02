import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MandateService} from "../../../Services/mandate/mandate.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-mandate',
  templateUrl: './update-mandate.component.html',
  styleUrls: ['./update-mandate.component.css']
})
export class UpdateMandateComponent implements OnInit {
  mandateForm: FormGroup;
  deputationDaysIds: number[] = [];
  id=this.routes.snapshot.params['id']
  editMandate = new FormGroup({
    department:  new FormControl(''),
    name:  new FormControl(''),
    degree:  new FormControl(''),
    deputationUniversity:  new FormControl(''),
    deputationPeriod: new FormControl(''),
    deputationDaysIds:  new FormControl(''),
    departmentAccept:  new FormControl(''),
    departmentDate:  new FormControl(''),
    departmentRecordNum:  new FormControl(''),
    facultyRecordNum:  new FormControl(''),
    facultyDate: new FormControl(''),
    facultyAccept:  new FormControl(''),
    universityAccept:  new FormControl(''),
    universityDate:  new FormControl(''),
    universityRecordNum:  new FormControl(''),
    notes: new FormControl(''),
  });

  constructor(private routes: ActivatedRoute, private mandateService: MandateService,
              private router: Router) {
  }

  ngOnInit() {
    this.mandateService.getMandateById(this.id).subscribe((result:any)=>{
      this.editMandate=new FormGroup({
        department: new FormControl(result['department']),
        name:   new FormControl(result['name']),
        degree:  new FormControl(result['degree']),
        deputationUniversity:  new FormControl(result['deputationUniversity']),
        deputationPeriod:  new FormControl(result['deputationPeriod']),
        deputationDaysIds:  new FormControl(result['deputationDaysIds']),
        departmentAccept:  new FormControl(result['departmentAccept']),
        departmentDate:   new FormControl(result['departmentDate']),
        departmentRecordNum:  new FormControl(result['departmentRecordNum']),
        facultyRecordNum:  new FormControl(result['facultyRecordNum']),
        facultyDate:  new FormControl(result['facultyDate']),
        facultyAccept:  new FormControl(result['facultyAccept']),
        universityAccept:  new FormControl(result['universityAccept']),
        universityDate:   new FormControl(result['universityDate']),
        universityRecordNum:  new FormControl(result['universityRecordNum']),
        notes: new FormControl(result['notes']),
      })
    })
  }
  update() {
    this.mandateService.updateMandate(this.id, this.editMandate.value)
      .subscribe(( ) => {
        this.router.navigate([`/all-mandate`])
      })
  }


  onWeekdayChange(event: any, day: number) {
    if (event.target.checked) {
      this.deputationDaysIds.push(day);
    }
    this.mandateForm.get('deputationDaysIds')?.setValue(this.deputationDaysIds);
  }

  onSubmit() {
    if (this.mandateForm.valid) {
      const formData = this.mandateForm.value;
      this.mandateService.addMandate(formData).subscribe(result => {
          this.router.navigateByUrl('/add-mandate');
          window.location.reload();
        }
      )
    }
  }
}
