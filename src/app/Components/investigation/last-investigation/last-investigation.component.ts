import {Component, OnInit} from '@angular/core';
import {Investigation} from "../../../Models/investigation/investigation";
import {InvestigationService} from "../../../Services/investigation/investigation.service";

@Component({
  selector: 'app-last-investigation',
  templateUrl: './last-investigation.component.html',
  styleUrls: ['../investigation/investigation.component.css']
})
export class LastInvestigationComponent implements OnInit {

  investigations: Investigation[] = [];
  searchText: string;

  constructor(private investigationService: InvestigationService) {
  }

  findAll() {
    this.investigationService.findAllYears().subscribe(res => this.investigations = res);
  }

  ngOnInit() {
    this.findAll();
  }

  onsearchTextEntered(searchValue) {
    this.searchText = searchValue
  }

  getPage(item: Investigation): number {
    return this.investigations.indexOf(item) + 1;
  }

}
