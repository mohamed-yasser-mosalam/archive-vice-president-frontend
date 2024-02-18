import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodayServiceService} from "../../Services/TodayServices/today-service.service";
import {ShowTodayExports} from "../../Models/showTodayExports/show-today-exports";
import {ShowTodayImports} from "../../Models/showTodayImports/show-today-imports";
import {ShowAllImportantFile} from "../../Models/showAllImportantFile/show-all-important-file";
import {LetterHasGoneService} from "../../Services/LetterHasGone/letter-has-gone.service";
import {AuthenticationServiceService} from "../../Services/Security/authentication-service.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  NumberOfFileHadGone: any;
  NumberOfFileHasGone: any;
  NumberOfFileNotCome: any;
  NumberOfImportantLetter: any;
  NumberOfAllExports: any;
  NumberOfAllImports: any;
  numberOfAllFiles:any
  showAllTodayExports: ShowTodayExports[] = []
  showAllTodayImports: ShowTodayImports[] = []
  showLetterHasGone:ShowAllImportantFile[]=[]
  constructor(private http: HttpClient, private service: TodayServiceService,
              private LetterHasGoneService: LetterHasGoneService,
              private auth:AuthenticationServiceService,
  ) {
  }

  ngOnInit(): void {
    this.getNumberOfFileHadGone();
    this.getNumberOfFileHasGone();
    this.getNumberOfFileNotCome();
    this.getNumberOfImportantLetter();
    this.getNumberOfAllExports();
    this.getNumberOfAllImports();
    this.getAllTodayExports();
    this.getAllTodayImports();
    this.getLetterHasGone();
   }

  getNumberOfFileHadGone() {
    this.http.get('http://localhost:1200/import/count-response-date-passed').subscribe((numberOfFileHadGone) => {
      this.NumberOfFileHadGone = numberOfFileHadGone;
    })
  }

  getNumberOfFileNotCome() {
    this.http.get('http://localhost:1200/import/count-response-date-not-time').subscribe((numberOfFileNotCome) => {
      this.NumberOfFileNotCome = numberOfFileNotCome;
    })
  }

  getNumberOfFileHasGone() {
    this.http.get('http://localhost:1200/import/count-response-date-is-time').subscribe((numberOfFileHasGone) => {
      this.NumberOfFileHasGone = numberOfFileHasGone;
    })
  }


  private getNumberOfImportantLetter() {
    this.http.get('http://localhost:1200/import/count-important').subscribe((numberOfImportantLetter) => {
      this.NumberOfImportantLetter = numberOfImportantLetter;
    })
  }

  private getNumberOfAllExports() {
    this.http.get('http://localhost:1200/export/count').subscribe((numberOfAllExports) => {
      this.NumberOfAllExports = numberOfAllExports;
    })
  }

  private getNumberOfAllImports() {
    this.http.get('http://localhost:1200/import/count').subscribe((numberOfAllImports) => {
      this.NumberOfAllImports = numberOfAllImports;
    })
  }

  private getAllTodayExports() {
    return this.service.getAllTodayExport().subscribe((allTodayExport: any) => {
      this.showAllTodayExports = allTodayExport;
    })
  }

  private getAllTodayImports() {
    return this.service.getAllTodayImport().subscribe((allTodayImport: any) => {
      this.showAllTodayImports = allTodayImport;
    })
  }

  getLetterHasGone() {
    return this.LetterHasGoneService.getAllLetterHasGone().subscribe((letterHasGone: any) => {
      this.showLetterHasGone = letterHasGone;
    })
  }
}
