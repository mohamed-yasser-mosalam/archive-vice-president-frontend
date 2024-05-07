import {Component, OnInit} from '@angular/core';
import {Signs} from "../../../Models/signs/signs";
import {SignsService} from "../../../Services/signs/signs.service";

@Component({
  selector: 'app-all-sign',
  templateUrl: './all-sign.component.html',
  styleUrls: ['./all-sign.component.css']
})
export class AllSignComponent implements OnInit {
  getSigns: Signs[] = []
  searchText: string

  constructor(private signsService: SignsService) {
  }

  getAllSigns() {
    return this.signsService.getAllSigns().subscribe((getAllSign: any) => {
      this.getSigns = getAllSign;
    });
  }

  ngOnInit(): void {
    this.getAllSigns();
  }

  onsearchTextEntered(searchValue) {
    this.searchText = searchValue
  }
}



