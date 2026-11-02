import {Component} from '@angular/core';
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
