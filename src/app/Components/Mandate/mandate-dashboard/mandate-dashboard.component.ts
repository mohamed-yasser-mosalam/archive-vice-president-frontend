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
import {MandateService} from "../../../Services/mandate/mandate.service";
import {Mandate} from "../../../Models/mandate/mandate";

@Component({
  selector: 'app-mandate-dashboard',
  templateUrl: './mandate-dashboard.component.html',
  styleUrls: ['./mandate-dashboard.component.css']
})
export class MandateDashboardComponent implements OnInit {
  numberOfAllMandate: any;
  numberOfAllAcceptsMandate: any;
  numberOfAllRefusedMandate: any;
  numberOfCurrentMandate: any;
  showAllTodayDoctors: any;
  numberOfSpecialMandate: any;
  NumberOfAllDeanDecisions: any;
  NumberOfAllImports: any;
  numberOfAllSpecial: any;
  years: any;
  selectedYear: number = new Date().getFullYear();
  numberOfLetterForYears: any
  numberOfExportLetterForSpecificYear: any = 0;
  numberOfImportLetterForSpecificYear: any = 0;
  numberOfSpecialLetterForSpecificYear: any = 0;
  showAllTodayMandate: Mandate[] = []
  showAllTodayImports: ShowTodayImports[] = []
  allDaysOfMandate: Mandate[] = []

  constructor(private http: HttpClient,
              private service: TodayServiceService,
              private mandateService:  MandateService,
              private exportService: ExportServiceService,
              private importService: ImportServiceService,
              private specialService: SpecialService
  ) {
  }

  ngOnInit(): void {
    this.getNumberOfAllMandate();
    this.getNumberOfAllAcceptsMandate();
    this.getNumberOfAllRefusedMandate();
    this.getAllDaysOfMandate();
    this.getAllCurrentMandateNumber();
    this.getAllTodayMandate();
    this.getAllTodayDoctors();
    this.getAllSpecialMandateNumber();
  }

  getNumberOfAllMandate() {
    this.mandateService.getAllMandateNumbers().subscribe((numberOfAllMandate) => {
      this.numberOfAllMandate = numberOfAllMandate;
    })
  }

  getNumberOfAllAcceptsMandate() {
    this.mandateService.getAllAcceptsMandateNumber().subscribe((numberOfAllAcceptsMandate) => {
      this.numberOfAllAcceptsMandate = numberOfAllAcceptsMandate;
    })
  }

  getNumberOfAllRefusedMandate() {
    this.mandateService.getAllRefusedMandateNumber().subscribe((numberOfAllRefusedMandate) => {
      this.numberOfAllRefusedMandate = numberOfAllRefusedMandate;
    })
  }


   getAllDaysOfMandate() {
    this.mandateService.getDaysOfMandate().subscribe((allDayMandate:any) => {
      this.allDaysOfMandate = allDayMandate;
    })
  }
  getAllCurrentMandateNumber() {
    this.mandateService.getCurrentMandateNumber().subscribe((currentMandate:any) => {
      this.numberOfCurrentMandate = currentMandate;
    })
  }

  getAllTodayMandate() {
    return this.mandateService.getAllTodayMandate().subscribe((allTodayMandate: any) => {
      this.showAllTodayMandate = allTodayMandate;
    })
  }

  getAllTodayDoctors() {
    return this.mandateService.getAllTodayDoctors().subscribe((allTodayDoctors: any) => {
      this.showAllTodayDoctors = allTodayDoctors;
    })
  }
  getAllSpecialMandateNumber() {
    return this.mandateService.getAllSpecialMandateNumber().subscribe((allSpecialMandate: any) => {
      this.numberOfSpecialMandate = allSpecialMandate;
    })
  }

  // private getNumberOfSigns() {
  //   this.welcomeservice.getNumberOfSigns().subscribe((numberOfAllSigns) => {
  //     this.NumberOfAllSigns = numberOfAllSigns;
  //   })
  // }
  //
  // private getNumberOfAllDeanDecisions() {
  //   this.welcomeservice.getNumberOfDeanDecision().subscribe((numberOfAllDeanDecisions) => {
  //     this.NumberOfAllDeanDecisions = numberOfAllDeanDecisions;
  //   })
  // }
  //
  // getYears() {
  //   this.welcomeservice.getYears().subscribe((years: number[]) => {
  //     const currentYear = new Date().getFullYear();
  //     this.years = years.filter(year => year !== currentYear);
  //   });
  // }
  //
  // getNumberOfLetterForYears() {
  //   if (this.selectedYear) {
  //     this.welcomeservice.getNumberOfLetterForExports(this.selectedYear).subscribe((numberOfExportLetterForSpecificYears) => {
  //       this.numberOfExportLetterForSpecificYear = numberOfExportLetterForSpecificYears;
  //     });
  //   }
  //   if (this.selectedYear) {
  //     this.welcomeservice.getNumberOfLetterForImports(this.selectedYear).subscribe((numberOfImportLetterForSpecificYears) => {
  //       this.numberOfImportLetterForSpecificYear = numberOfImportLetterForSpecificYears;
  //     });
  //   }
  //   if (this.selectedYear) {
  //     this.welcomeservice.getNumberOfLetterForSpecials(this.selectedYear).subscribe((numberOfSpecialLetterForSpecificYear) => {
  //       this.numberOfSpecialLetterForSpecificYear = numberOfSpecialLetterForSpecificYear;
  //     });
  //   }
  // }

}
