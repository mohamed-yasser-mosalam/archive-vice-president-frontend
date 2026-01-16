import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  base = baseUrl

  constructor(private http: HttpClient) {
  }

  getNumberOfFileHadGone() {
    return this.http.get(`${this.base}/import/count-response-date-passed`)
  }

  getNumberOfFileNotCome() {
    return this.http.get(`${this.base}/import/count-response-date-not-time`)
  }

  getNumberOfFileHasGone() {
    return this.http.get(`${this.base}/import/count-response-date-is-time`)
  }


  getNumberOfImportantLetter() {
    return this.http.get(`${this.base}/import/count-important`)
  }


  getYears() {
    return this.http.get<number[]>(`${this.base}/general/years`)
  }

  getNumberOfLetterForExports(selectedYear: any) {
    return this.http.get(`${this.base}/export/count-export-by-year?year=${selectedYear}`)
  }

  getNumberOfLetterForImports(selectedYear: any) {
    return this.http.get(`${this.base}/import/count-import-by-year?year=${selectedYear}`)
  }

  getNumberOfLetterForSpecials(selectedYear: any) {
    return this.http.get(`${this.base}/special/count-special-by-year?year=${selectedYear}`)
  }

  getNumberOfInvestigation() {
    return this.http.get(`${this.base}/investigation/count-current`)
  }

  getNumberOfDeanDecision() {
    return this.http.get(`${this.base}/dean-decisions/count-current`)
  }

}
