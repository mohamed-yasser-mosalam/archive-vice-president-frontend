import { Component } from '@angular/core';
import {Showallimport} from "../Models/showAllImports/showallimport";
import {LetterHasGoneService} from "../Services/LetterHasGone/letter-has-gone.service";
import {LetterHadGoneServiceService} from "../Services/LetterHadGone/letter-had-gone-service.service";

@Component({
  selector: 'app-file-had-gone',
  templateUrl: './file-had-gone.component.html',
  styleUrls: ['./file-had-gone.component.css']
})
export class FileHadGoneComponent {

  showAllFileHadGone: Showallimport[]=[]

  constructor(private service:LetterHadGoneServiceService) {
  }
  ngOnInit(): void {
    this.getAllFileHasGone()
  }
  getAllFileHasGone() {
    return this.service.getAllLetterHadGone().subscribe((getAllFileHadGone:any)=>{
      this.showAllFileHadGone=getAllFileHadGone;
    })
  }

}
