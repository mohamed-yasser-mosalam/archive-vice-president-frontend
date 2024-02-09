import {Component, OnInit} from '@angular/core';
import {Showallexport} from "../Models/showAllExports/showallexport";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-archive-export',
  templateUrl: './archive-export.component.html',
  styleUrls: ['./archive-export.component.css']
})
export class ArchiveExportComponent implements OnInit{

  showAllExport: Showallexport[]
  page: number = 1;
  x: any;
  searchText: string

  onsearchTextEntered(searchValue) {
    this.searchText = searchValue
  }

  constructor(private service: ExportServiceService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getAllExports()

  }

  getAllExports() {
    return this.service.getAllExports().subscribe((getAllExport: any) => {
      this.showAllExport = getAllExport;
    })
  }

}
