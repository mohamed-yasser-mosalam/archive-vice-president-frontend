import {Component, OnInit} from '@angular/core';
import {Specialfile} from "../Models/specialfile/specialfile";
import {SpecialService} from "../Services/SpecialService/special.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-archive-special',
  templateUrl: './archive-special.component.html',
  styleUrls: ['./archive-special.component.css']
})
export class ArchiveSpecialComponent implements OnInit{
  specialFile: Specialfile[] = []
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
