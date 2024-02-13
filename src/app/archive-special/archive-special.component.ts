import {Component, OnInit} from '@angular/core';
import {SpecialService} from "../Services/SpecialService/special.service";
import {ActivatedRoute} from "@angular/router";
import {Special} from "../Models/Special/special";

@Component({
  selector: 'app-archive-special',
  templateUrl: './archive-special.component.html',
  styleUrls: ['./archive-special.component.css']
})
export class ArchiveSpecialComponent implements OnInit{
  specialFile: Special[] = []
  searchText: string

  constructor(private specialService: SpecialService,private routes:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAllSpecials();

  }

  getAllSpecials() {
    return this.specialService.getSpecialsById(this.routes.snapshot.params['id']).subscribe((getAllSpecial: any) => {
      this.specialFile = getAllSpecial;
    })
  }

  onsearchTextEntered(searchValue) {
    this.searchText = searchValue
  }
}
