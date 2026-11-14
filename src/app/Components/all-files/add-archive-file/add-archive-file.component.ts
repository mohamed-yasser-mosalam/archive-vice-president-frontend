import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AllFilesService} from "../../../Services/AllFile/all-files.service";
import {ArchiveFile} from "../../../Models/addArchiveFile/archive-file";
import {AlertService} from "../../../Services/alert/alert.service";

@Component({
  selector: 'app-add-archive-file',
  templateUrl: './add-archive-file.component.html',
  styleUrls: ['./add-archive-file.component.css']
})
export class AddArchiveFileComponent implements OnInit {
  archiveForm: FormGroup;

  constructor(private allFilesService: AllFilesService, private router: Router,
              private fb: FormBuilder, private alert: AlertService) {
  }

  ngOnInit(): void {
    this.archiveForm = this.fb.group({
      name: [''],
      num: [''],
      typeNumber: [''],
    });
  }

  addArchiveFile(archiveFile: ArchiveFile) {
    this.allFilesService.saveArchiveFile(archiveFile).subscribe(
      result => {
        this.router.navigateByUrl('/all-files');
      },
      error => {
        this.alert.error(error).then(() => window.location.reload());
      }
      )
      }


    onSubmit()
  :
    void {
      if(this.archiveForm.valid
  )
    {
      this.addArchiveFile(this.archiveForm.value);
    }
  }

  }


