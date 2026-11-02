import {Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  ignoreQuery = {paths: 'subset', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored'} as const
}
