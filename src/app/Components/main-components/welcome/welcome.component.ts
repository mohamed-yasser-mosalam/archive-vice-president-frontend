import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShowTodayExports} from "../../../Models/showTodayExports/show-today-exports";
import {ShowTodayImports} from "../../../Models/showTodayImports/show-today-imports";
import {ShowAllImportantFile} from "../../../Models/showAllImportantFile/show-all-important-file";
import {TodayServiceService} from "../../../Services/TodayServices/today-service.service";
import {WelcomeService} from "../../../Services/welcome/welcome.service";
import {ExportServiceService} from "../../../Services/ExportsServices/export-service.service";
import {ImportServiceService} from "../../../Services/ImportsServices/import-service.service";
import {SpecialService} from "../../../Services/SpecialService/special.service";
import {LetterHasGoneService} from "../../../Services/LetterHasGone/letter-has-gone.service";


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
  NumberOfAllSigns: any;
  NumberOfAllDeanDecisions: any;
  NumberOfAllImports: any;
  numberOfAllSpecial: any;
  years: any;
  selectedYear: number = new Date().getFullYear();
  numberOfLetterForYears: any
  numberOfExportLetterForSpecificYear: any = 0;
  numberOfImportLetterForSpecificYear: any = 0;
  numberOfSpecialLetterForSpecificYear: any = 0;
  showAllTodayExports: ShowTodayExports[] = []
  showAllTodayImports: ShowTodayImports[] = []
  showLetterHasGone: ShowAllImportantFile[] = []

  constructor(private http: HttpClient, private service: TodayServiceService,
              private LetterHasGoneService: LetterHasGoneService,
              private welcomeservice: WelcomeService,
              private exportService: ExportServiceService,
              private importService: ImportServiceService,
              private specialService: SpecialService
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
    this.getNumberOfSigns();
    this.getNumberOfAllDeanDecisions();
    // this.getNumberOfLetterForYears();
  }

  getNumberOfFileHadGone() {
    this.welcomeservice.getNumberOfFileHadGone().subscribe((numberOfFileHadGone) => {
      this.NumberOfFileHadGone = numberOfFileHadGone;
    })
  }

  getNumberOfFileNotCome() {
    this.welcomeservice.getNumberOfFileNotCome().subscribe((numberOfFileNotCome) => {
      this.NumberOfFileNotCome = numberOfFileNotCome;
    })
  }

  getNumberOfFileHasGone() {
    this.welcomeservice.getNumberOfFileHasGone().subscribe((numberOfFileHasGone) => {
      this.NumberOfFileHasGone = numberOfFileHasGone;
    })
  }


  getNumberOfImportantLetter() {
    this.welcomeservice.getNumberOfImportantLetter().subscribe((numberOfImportantLetter) => {
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

  getAllTodayExports() {
    return this.service.getAllTodayExport().subscribe((allTodayExport: any) => {
      this.showAllTodayExports = allTodayExport;
    })
  }

  getAllTodayImports() {
    return this.service.getAllTodayImport().subscribe((allTodayImport: any) => {
      this.showAllTodayImports = allTodayImport;
    })
  }

  private getNumberOfSigns() {
    this.welcomeservice.getNumberOfSigns().subscribe((numberOfAllSigns) => {
      this.NumberOfAllSigns = numberOfAllSigns;
    })
  }

  private getNumberOfAllDeanDecisions() {
    this.welcomeservice.getNumberOfDeanDecision().subscribe((numberOfAllDeanDecisions) => {
      this.NumberOfAllDeanDecisions = numberOfAllDeanDecisions;
    })
  }

  getLetterHasGone() {
    return this.LetterHasGoneService.getAllLetterHasGone().subscribe((letterHasGone: any) => {
      this.showLetterHasGone = letterHasGone;
    })
  }

  getYears() {
    this.welcomeservice.getYears().subscribe((years: number[]) => {
      const currentYear = new Date().getFullYear();
      this.years = years.filter(year => year !== currentYear);
    });
  }

  getNumberOfLetterForYears() {
    if (this.selectedYear) {
      this.welcomeservice.getNumberOfLetterForExports(this.selectedYear).subscribe((numberOfExportLetterForSpecificYears) => {
        this.numberOfExportLetterForSpecificYear = numberOfExportLetterForSpecificYears;
      });
    }
    if (this.selectedYear) {
      this.welcomeservice.getNumberOfLetterForImports(this.selectedYear).subscribe((numberOfImportLetterForSpecificYears) => {
        this.numberOfImportLetterForSpecificYear = numberOfImportLetterForSpecificYears;
      });
    }
    if (this.selectedYear) {
      this.welcomeservice.getNumberOfLetterForSpecials(this.selectedYear).subscribe((numberOfSpecialLetterForSpecificYear) => {
        this.numberOfSpecialLetterForSpecificYear = numberOfSpecialLetterForSpecificYear;
      });
    }
  }

}
