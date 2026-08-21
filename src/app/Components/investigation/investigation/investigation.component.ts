import {Component, OnInit} from '@angular/core';
import {Investigation} from "../../../Models/investigation/investigation";
import {InvestigationService} from "../../../Services/investigation/investigation.service";

@Component({
  selector: 'app-investigation',
  templateUrl: './investigation.component.html',
  styleUrls: ['./investigation.component.css']
})
export class InvestigationComponent implements OnInit {

  investigations: Investigation[] = [];
  searchText: string;

  constructor(private investigationService: InvestigationService) {
  }

  findAll() {
    this.investigationService.findAll().subscribe(res => this.investigations = res);
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
