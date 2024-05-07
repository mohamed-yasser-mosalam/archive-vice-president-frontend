import {Component} from '@angular/core';
import {Showallimport} from "../../../Models/showAllImports/showallimport";
import {LetterNotGoneService} from "../../../Services/LetterNotCome/letter-not-gone.service";


@Component({
  selector: 'app-file-not-come',
  templateUrl: './file-not-come.component.html',
  styleUrls: ['./file-not-come.component.css']
})
export class FileNotComeComponent {

  showAllFileNotCome: Showallimport[]=[]

  constructor(private service:LetterNotGoneService) {
  }
  ngOnInit(): void {
    this.getAllFileHasGone()
  }
  getAllFileHasGone() {
    return this.service.getAllLetterNotCome().subscribe((AllFileNotCome:any)=>{
      this.showAllFileNotCome=AllFileNotCome;
    })
  }

}
