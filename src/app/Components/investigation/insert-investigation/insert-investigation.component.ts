import {Component} from '@angular/core';
import {Investigation} from "../../../Models/investigation/investigation";
import {InvestigationService} from "../../../Services/investigation/investigation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-insert-investigation',
  templateUrl: './insert-investigation.component.html',
  styleUrls: ['./insert-investigation.component.css']
})
export class InsertInvestigationComponent {

  task: any
  investigation: Investigation = {} as Investigation;

  constructor(private service: InvestigationService , private router : Router) {
  }

  insert() {
      this.service.insert(this.investigation).subscribe(res=> this.router.navigateByUrl('/investigation'));
  }
}
