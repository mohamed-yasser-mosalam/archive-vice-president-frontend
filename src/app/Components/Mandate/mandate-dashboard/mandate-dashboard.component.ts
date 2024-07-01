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
  specialUniversity: any;
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
    this.getAllSpecialFaculty()
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
  getAllSpecialFaculty() {
    return this.mandateService.getAllSpecialUniversity().subscribe((allSpecialUniversity: any) => {
      this.specialUniversity = allSpecialUniversity;
    })
  }
  deleteSpecialUniversity(universityName:any){
    this.mandateService.deleteSpecialUniversity(universityName).subscribe((result: any) => {
        this.mandateService.getAllSpecialUniversity();
        window.location.reload();
      },
      (error: any) => {
      }
    )
  }

  }
