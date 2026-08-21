import {Component, OnInit} from '@angular/core';
import {Investigation} from "../../../Models/investigation/investigation";
import {InvestigationService} from "../../../Services/investigation/investigation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-investigation',
  templateUrl: './update-investigation.component.html',
  styleUrls: ['./update-investigation.component.css']
})
export class UpdateInvestigationComponent implements OnInit {

  id: number;
  investigation: Investigation = {} as Investigation;

  constructor(private service: InvestigationService, private activatedRoute: ActivatedRoute , private router : Router) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.findById(this.id).subscribe(res => this.investigation = res);
  }

  update() {
    this.service.update(this.investigation, this.id).subscribe(() => this.router.navigateByUrl('/investigation'));
  }
}
