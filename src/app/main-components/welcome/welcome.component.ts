import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodayServiceService} from "../../Services/TodayServices/today-service.service";
import {ShowTodayExports} from "../../Models/showTodayExports/show-today-exports";
import {ShowTodayImports} from "../../Models/showTodayImports/show-today-imports";
import {ShowAllImportantFile} from "../../Models/showAllImportantFile/show-all-important-file";
import {LetterHasGoneService} from "../../Services/LetterHasGone/letter-has-gone.service";
import {AuthenticationServiceService} from "../../Services/Security/authentication-service.service";
import {ExportServiceService} from "../../Services/ExportsServices/export-service.service";
import {ImportServiceService} from "../../Services/ImportsServices/import-service.service";
import {SpecialService} from "../../Services/SpecialService/special.service";

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
  numberOfAllSpecial: any;
  years: any;
  selectedYear: number = new Date().getFullYear();
  numberOfLetterForYears: any
  numberOfExportLetterForSpecificYear:any=0;
  numberOfImportLetterForSpecificYear:any=0;
  showAllTodayExports: ShowTodayExports[] = []
  showAllTodayImports: ShowTodayImports[] = []
  showLetterHasGone: ShowAllImportantFile[] = []

  constructor(private http: HttpClient, private service: TodayServiceService,
              private LetterHasGoneService: LetterHasGoneService,
              private auth: AuthenticationServiceService,
              private exportService:ExportServiceService,
              private importService:ImportServiceService,
              private specialService:SpecialService
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
    this.getNumberOfAllSpecials();
    this.getYears();
    // this.getNumberOfLetterForYears();
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
    this.exportService.getExportNumber().subscribe((numberOfAllExports) => {
      this.NumberOfAllExports = numberOfAllExports;
    })
  }

  private getNumberOfAllSpecials() {
    this.specialService.getSpecialNumber().subscribe((numberOfAllSpecial) => {
      this.numberOfAllSpecial = numberOfAllSpecial;
    })
  }

  private getNumberOfAllImports() {
    this.importService.getImportNumber().subscribe((numberOfAllImports) => {
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

  getYears() {
    this.http.get<number[]>('http://localhost:1200/general/years').subscribe((years: number[]) => {
      const currentYear = new Date().getFullYear();
      this.years = years.filter(year => year !== currentYear);
    });
  }

  getNumberOfLetterForYears() {
    if (this.selectedYear) {
      this.http.get(`http://localhost:1200/export/count-export-by-year?year=${this.selectedYear}`).subscribe((numberOfLetterForYear) => {
        this.numberOfLetterForYears = numberOfLetterForYear;
      });
    }
    if (this.selectedYear) {
      this.http.get(`http://localhost:1200/export/count-export-by-year?year=${this.selectedYear}`).subscribe((numberOfExportLetterForSpecificYears) => {
        this.numberOfExportLetterForSpecificYear = numberOfExportLetterForSpecificYears;
      });
    }
    if (this.selectedYear) {
      this.http.get(`http://localhost:1200/import/count-import-by-year?year=${this.selectedYear}`).subscribe((numberOfImportLetterForSpecificYears) => {
        this.numberOfImportLetterForSpecificYear = numberOfImportLetterForSpecificYears;
      });
    }
  }

 }
