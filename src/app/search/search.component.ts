import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  enterSearchValue: any;
  @Output()
  searchTextChange:EventEmitter<string>=new EventEmitter<string>()
  onsearchTextChange(){
    this.searchTextChange.emit(this.enterSearchValue)
  }
}
