import {Component, OnInit} from '@angular/core';
import {SpecialService} from "../Services/SpecialService/special.service";
import {Special} from "../Models/Special/special";

@Component({
  selector: 'app-Special',
  templateUrl: './specialfile.component.html',
  styleUrls: ['./specialfile.component.css']
})
export class SpecialfileComponent implements OnInit {
  specialFile: Special[] = []
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
