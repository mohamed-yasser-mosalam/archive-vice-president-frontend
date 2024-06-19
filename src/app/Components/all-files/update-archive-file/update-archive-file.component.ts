import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AllFilesService} from "../../../Services/AllFile/all-files.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-archive-file',
  templateUrl: './update-archive-file.component.html',
  styleUrls: ['./update-archive-file.component.css']
})
export class UpdateArchiveFileComponent implements OnInit {


  editArchiveFile = new FormGroup({
    name: new FormControl('')
  })

  id = this.routes.snapshot.params['id']
  showArchive: any;

  constructor(private routes: ActivatedRoute, private allFilesService: AllFilesService, private router: Router) {
  }




  ngOnInit(): void {
    this.allFilesService.getById(this.id).subscribe((result) => {
      // @ts-ignore
      this.editArchiveFile = new FormGroup({
        name: new FormControl(result['name'])
      })
    })
    this.showArchiveFile()
  }

  showArchiveFile() {
    this.allFilesService.getById(this.id).subscribe((result: any) => {
      this.showArchive = result;
    })
  }

  update() {
    this.allFilesService.updateArchiveFile(this.id, this.editArchiveFile.value.name)
      .subscribe(() => {
        this.router.navigate([`/all-files`])
      })
  }


}
