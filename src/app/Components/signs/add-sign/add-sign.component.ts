import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SignsService} from "../../../Services/signs/signs.service";
import {AuthenticationServiceService} from "../../../Services/Security/authentication-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-sign',
  templateUrl: './add-sign.component.html',
  styleUrls: ['./add-sign.component.css']
})
export class AddSignComponent implements OnInit {
  id = this.routes.snapshot.params['page']
  no: number
  roleOfUser = this.auth.getUserRoles();
  page = this.routes.snapshot.params['page']
  numberOfSign: number
  signForm = new FormGroup({
    universityYear: new FormControl(''),
    date: new FormControl(''),
    sender: new FormControl(''),
    via: new FormControl(''),
    signInformer: new FormControl(''),
    signInformerSelf: new FormControl(''),
    signInformerPhone: new FormControl(''),
    summary: new FormControl(''),
    signSignature: new FormControl(''),
    signSelf: new FormControl(''),
    signRecipientName: new FormControl(''),
    signRecipientSelf: new FormControl(''),
    signRecipientDate: new FormControl(''),
    signExcutedName: new FormControl(''),
    signExcutedSelf: new FormControl(''),
    signExecutionDate: new FormControl(''),
    depend: new FormControl(''),
  });

  ngOnInit(): void {
    this.getSignNumber();
  }


  constructor(
    private signService: SignsService,
    private auth: AuthenticationServiceService,
    private routes: ActivatedRoute,
  ) {
  }

  addSign(data: any): void {
    this.signService.addSign(data).subscribe(() => {
      window.location.reload();
    });
  }

  getSignNumber(): void {
    this.signService.getNumberOfSigns().subscribe((numberOfSigns: any) => {
      this.numberOfSign = numberOfSigns + 1;
    });
  }


  onSubmit(): void {
    if (this.signForm.valid) {
      this.addSign(this.signForm.value);
    }
  }
}
