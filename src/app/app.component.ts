import {Component, HostListener} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';

// Routes that render full-screen, without the sidebar and top bar
const BARE_ROUTES = ['login', '**'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  showShell = false;

  // Table cells cut off with "…" show their full text as a tooltip
  @HostListener('document:mouseover', ['$event'])
  showTruncatedCellText(event: MouseEvent) {
    const cell = (event.target as HTMLElement | null)?.closest?.('.table-card > .data-table td') as HTMLElement | null;
    if (cell && !cell.title && cell.scrollWidth > cell.clientWidth) {
      cell.title = cell.textContent?.trim() ?? '';
    }
  }

  constructor(router: Router, route: ActivatedRoute) {
    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      let child = route.firstChild;
      while (child?.firstChild) {
        child = child.firstChild;
      }
      const path = child?.routeConfig?.path;
      this.showShell = path !== undefined && !BARE_ROUTES.includes(path);
    });
  }
}
