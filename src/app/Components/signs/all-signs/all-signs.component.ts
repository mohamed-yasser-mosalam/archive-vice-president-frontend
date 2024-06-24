import { Component } from '@angular/core';
import {Signs} from "../../../Models/signs/signs";
import {SignsService} from "../../../Services/signs/signs.service";

@Component({
  selector: 'app-all-signs',
  templateUrl: './all-signs.component.html',
  styleUrls: ['./all-signs.component.css']
})
export class AllSignsComponent {
  getSigns: Signs[] = []
  searchText: string

  constructor(private signsService: SignsService) {
  }

  getLastSins() {
    return this.signsService.getLastSins().subscribe((getAllSign: any) => {
      this.getSigns = getAllSign;
    });
  }

  ngOnInit(): void {
    this.getLastSins();
  }

  onsearchTextEntered(searchValue) {
    this.searchText = searchValue
  }
}
