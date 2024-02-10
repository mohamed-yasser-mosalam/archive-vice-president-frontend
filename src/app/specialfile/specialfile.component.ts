import {Component, OnInit} from '@angular/core';
import {Specialfile} from "../Models/specialfile/specialfile";
import {SpecialService} from "../Services/SpecialService/special.service";

@Component({
  selector: 'app-specialfile',
  templateUrl: './specialfile.component.html',
  styleUrls: ['./specialfile.component.css']
})
export class SpecialfileComponent implements OnInit {
  specialFile: Specialfile[] = []
  searchText: string

  constructor(private specialService: SpecialService) {
  }

  ngOnInit(): void {
    this.getAllSpecials();

  }

  getAllSpecials() {
    return this.specialService.getAllSpecials().subscribe((getAllSpecial: any) => {
      this.specialFile = getAllSpecial;
     })
  }

  onsearchTextEntered(searchValue) {
    this.searchText = searchValue
  }
}
