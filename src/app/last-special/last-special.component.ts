import {Component, OnInit} from '@angular/core';
import {Special} from "../Models/Special/special";
import {SpecialService} from "../Services/SpecialService/special.service";

@Component({
  selector: 'app-last-special',
  templateUrl: './last-special.component.html',
  styleUrls: ['./last-special.component.css']
})
export class LastSpecialComponent  implements OnInit {
  specialFile: Special[] = []
  searchText: string

  constructor(private specialService: SpecialService) {
  }

  ngOnInit(): void {
    this.getAllSpecials();

  }

  getAllSpecials() {
    return this.specialService.getAllLastSpecials().subscribe((getAllSpecial: any) => {
      this.specialFile = getAllSpecial;
    })
  }

  onsearchTextEntered(searchValue) {
    this.searchText = searchValue
  }
}
