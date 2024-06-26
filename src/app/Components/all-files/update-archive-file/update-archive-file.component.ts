import {Component, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AllFilesService} from "../../../Services/AllFile/all-files.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-archive-file',
  templateUrl: './update-archive-file.component.html',
  styleUrls: ['./update-archive-file.component.css']
})
export class UpdateArchiveFileComponent implements OnInit {
  id = this.routes.snapshot.params['id']
  showArchive: any
  updateArchiveFile = new FormGroup({
    name: new FormControl(''),
  })


  constructor(private allFiles: AllFilesService
    , private routes: ActivatedRoute
    , private router: Router,) {
  }

  ngOnInit(): void {
    this.allFiles.getById(this.id).subscribe((result:any) => {
      this.updateArchiveFile = new FormGroup({
        name: new FormControl(result['name']),
      })
    })
    this.showArchiveFile()
  }

  showArchiveFile() {
    this.allFiles.getById(this.id).subscribe((getExport: any) => {
      this.showArchive = getExport;

    })
  }
  update(){
    this.allFiles.updateArchiveFile(this.id, this.updateArchiveFile.value)
      .subscribe(( ) => {
        this.router.navigate([`/all-files`])
      })
  }
}
