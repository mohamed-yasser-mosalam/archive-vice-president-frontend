import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DeandecisionService} from "../../../Services/DeanDecision/deandecision.service";

@Component({
  selector: 'app-adddeandecision',
  templateUrl: './adddeandecision.component.html',
  styleUrls: ['./adddeandecision.component.css']
})
export class AdddeandecisionComponent implements OnInit {
  deanDecisionForm: FormGroup;
  numberOfDeanDecisions:any;


  constructor(private deanDecisionService: DeandecisionService,
              private formGroup: FormBuilder) {
  }

  deanForm() {
    this.deanDecisionForm = this.formGroup.group({
      summary: ['', [Validators.required, Validators.minLength(4)]],
      date: ['', [Validators.required, Validators.minLength(4)]],
      num: ['', [Validators.required, Validators.minLength(1)]],
      // numberOfAttachments: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  ngOnInit(): void {
    this.deanForm()
    this.numberOfDeanDecision()
  }
  numberOfDeanDecision(){
    this.deanDecisionService.getNumberOfDeanDecision().subscribe((result:any)=>{
       this.numberOfDeanDecisions=result+1
    })
  }
  addDeanDecision(data) {
    this.deanDecisionService.addDeanDecision(data).subscribe(() => {
      window.location.reload();
    });
  }
  onSubmit() {
    if (this.deanDecisionForm.valid) {
      this.addDeanDecision(this.deanDecisionForm.value);
    }
  }
}
