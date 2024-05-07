import {Component} from '@angular/core';
import {Showallimport} from "../../../Models/showAllImports/showallimport";
import {LetterHasGoneService} from "../../../Services/LetterHasGone/letter-has-gone.service";

@Component({
  selector: 'app-file-has-gone',
  templateUrl: './file-has-gone.component.html',
  styleUrls: ['./file-has-gone.component.css']
})
export class FileHasGoneComponent {

  showAllFileHasGone: Showallimport[]=[]

  constructor(private service:LetterHasGoneService) {
  }
  ngOnInit(): void {
    this.getAllFileHasGone()
  }
  getAllFileHasGone() {
    return this.service.getAllLetterHasGone().subscribe((getAllFileHasGone:any)=>{
      this.showAllFileHasGone=getAllFileHasGone;
    })
  }
}
