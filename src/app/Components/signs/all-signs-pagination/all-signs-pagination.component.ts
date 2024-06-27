import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { SignsService } from "../../../Services/signs/signs.service";
import { AuthenticationServiceService } from "../../../Services/Security/authentication-service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-all-signs-pagination',
  templateUrl: './all-signs-pagination.component.html',
  styleUrls: ['./all-signs-pagination.component.css']
})
export class AllSignsPaginationComponent implements OnInit {
  id = this.routes.snapshot.params['page'];
  no: number;
  roleOfUser = this.auth.getUserRoles();
  page = this.routes.snapshot.params['page'];
  pageLength: any;
  showSigns: any;
  size: number = 1;
  paths: string[];
  numbers: any = [];
  signForm = new FormGroup({
    id: new FormControl(''),
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

  constructor(
    private signService: SignsService,
    private auth: AuthenticationServiceService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCollectionSize();
    this.getSignNumber();
    this.showSignFile();
    this.form();
  }

  form() {
    this.signService.getLastSignsByPage(this.page).subscribe((result) => {
      this.signForm.patchValue({
        id: result['id'],
        universityYear: result['universityYear'],
        date: result['date'],
        sender: result['sender'],
        via: result['via'],
        signInformer: result['signInformer'],
        signInformerSelf: result['signInformerSelf'],
        signInformerPhone: result['signInformerPhone'],
        summary: result['summary'],
        signSignature: result['signSignature'],
        signSelf: result['signSelf'],
        signRecipientName: result['signRecipientName'],
        signRecipientSelf: result['signRecipientSelf'],
        signRecipientDate: result['signRecipientDate'],
        signExcutedName: result['signExcutedName'],
        signExcutedSelf: result['signExcutedSelf'],
        signExecutionDate: result['signExecutionDate'],
        depend: result['depend'],
      });
    });
  }

  showSignFile(): void {
    this.signService.getLastSignsByPage(this.page).subscribe((getSign: any) => {
      this.showSigns = getSign;
      this.id = this.showSigns.id;
    });
  }

  // Load the collection size from local storage
  loadCollectionSize() {
    const savedSize = localStorage.getItem('collectionSize');
    if (savedSize) {
      this.pageLength = parseInt(savedSize, 10);
    }
  }

  // Save the collection size to local storage
  saveCollectionSize(size: number) {
    localStorage.setItem('collectionSize', size.toString());
  }

  getSignNumber(): void {
    this.signService.getNumberOfAllSigns().subscribe((numberOfSigns: any) => {
      this.pageLength = numberOfSigns;
      this.saveCollectionSize(this.pageLength); // Save the collection size whenever it changes
    });
  }

  change(event): void {
    this.page = event;
    this.showSignFile();
    this.signService.getLastSignsByPage(event).subscribe((result) => {
      this.signForm = new FormGroup({
        id: new FormControl(result['id']),
        universityYear: new FormControl(result['universityYear']),
        date: new FormControl(result['date']),
        sender: new FormControl(result['sender']),
        via: new FormControl(result['via']),
        signInformer: new FormControl(result['signInformer']),
        signInformerSelf: new FormControl(result['signInformerSelf']),
        signInformerPhone: new FormControl(result['signInformerPhone']),
        summary: new FormControl(result['summary']),
        signSignature: new FormControl(result['signSignature']),
        signSelf: new FormControl(result['signSelf']),
        signRecipientName: new FormControl(result['signRecipientName']),
        signRecipientSelf: new FormControl(result['signRecipientSelf']),
        signRecipientDate: new FormControl(result['signRecipientDate']),
        signExcutedName: new FormControl(result['signExcutedName']),
        signExcutedSelf: new FormControl(result['signExcutedSelf']),
        signExecutionDate: new FormControl(result['signExecutionDate']),
        depend: new FormControl(result['depend']),
      });
    });
    const nextPageUrl = `/all-sign-pagination?page=/${this.page}`;
    this.router.navigate([nextPageUrl]);
    this.form();
  }
}
