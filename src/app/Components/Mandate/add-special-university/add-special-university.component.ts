import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AllFilesService} from "../../../Services/AllFile/all-files.service";
import {Router} from "@angular/router";
import {ArchiveFile} from "../../../Models/addArchiveFile/archive-file";
import {MandateService} from "../../../Services/mandate/mandate.service";

@Component({
  selector: 'app-add-special-university',
  templateUrl: './add-special-university.component.html',
  styleUrls: ['./add-special-university.component.css']
})
export class AddSpecialUniversityComponent implements OnInit {
  specialUniversityForm: FormGroup;

  constructor(private mandateService: MandateService, private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.specialUniversityForm = this.fb.group({
      university: [''],
    });
  }

  addSpecialUniversity(specialUniversity: any) {
    this.mandateService.addSpecialUniversity(specialUniversity).subscribe(() => {
      window.location.reload();
    });
  }

  onSubmit():
    void {
    if(this.specialUniversityForm.valid
    )
    {
      this.addSpecialUniversity(this.specialUniversityForm.value);
    }
  }

}


