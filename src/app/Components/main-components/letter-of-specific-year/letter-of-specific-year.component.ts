import {Component, OnInit} from '@angular/core';
import {ShowTodayExports} from "../../../Models/showTodayExports/show-today-exports";
import {ShowTodayImports} from "../../../Models/showTodayImports/show-today-imports";
import {ShowAllImportantFile} from "../../../Models/showAllImportantFile/show-all-important-file";
import {HttpClient} from "@angular/common/http";
import {TodayServiceService} from "../../../Services/TodayServices/today-service.service";
import {WelcomeService} from "../../../Services/welcome/welcome.service";
import {ExportServiceService} from "../../../Services/ExportsServices/export-service.service";
import {ImportServiceService} from "../../../Services/ImportsServices/import-service.service";
import {SpecialService} from "../../../Services/SpecialService/special.service";

@Component({
  selector: 'app-letter-of-specific-year',
  templateUrl: './letter-of-specific-year.component.html',
  styleUrls: ['./letter-of-specific-year.component.css']
})
export class LetterOfSpecificYearComponent implements OnInit {
  years: any;
  selectedYear: number = new Date().getFullYear();
  numberOfLetterForYears: any
  numberOfExportLetterForSpecificYear: any = 0;
  numberOfImportLetterForSpecificYear: any = 0;
  numberOfSpecialLetterForSpecificYear: any = 0;

  constructor(private http: HttpClient, private service: TodayServiceService,
              private welcomeservice: WelcomeService,
              private exportService: ExportServiceService,
              private importService: ImportServiceService,
              private specialService: SpecialService
  ) {
  }

  ngOnInit(): void {
    this.getYears();
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
