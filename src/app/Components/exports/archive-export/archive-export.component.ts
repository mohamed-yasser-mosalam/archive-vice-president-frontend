import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Showallexport} from "../../../Models/showAllExports/showallexport";
import {ExportServiceService} from "../../../Services/ExportsServices/export-service.service";

@Component({
  selector: 'app-archive-export',
  templateUrl: './archive-export.component.html',
  styleUrls: ['./archive-export.component.css']
})
export class ArchiveExportComponent implements OnInit{

  showAllExport: Showallexport[]
  searchText: string;
  id = this.routes.snapshot.params['id'];


  onsearchTextEntered(searchValue) {
    this.searchText = searchValue
  }

  constructor(private service: ExportServiceService, private activatedRoute: ActivatedRoute,
              private routes: ActivatedRoute,) {

  }

  ngOnInit(): void {
    this.getAllExports()

  }

  getAllExports() {
    return this.service.getExportArchiveFile( this.id).subscribe((getAllExport: any) => {
      this.showAllExport = getAllExport;
    })
  }

}
