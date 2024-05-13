import {Component, OnInit} from '@angular/core';
import {TeachingPhoneDirectory} from "../../../Models/PhoneDirectory/TeachingPhoneDirectory/teaching-phone-directory";
import {PhoneDirectoryService} from "../../../Services/PhoneDirectory/phone-directory.service";

@Component({
  selector: 'app-employee-phone-directory',
  templateUrl: './employee-phone-directory.component.html',
  styleUrls: ['./employee-phone-directory.component.css']
})
export class EmployeePhoneDirectoryComponent implements OnInit{

  employeePhoneDirectory: TeachingPhoneDirectory[] = [];
  searchText: string

  constructor(private phoneDirectoryService: PhoneDirectoryService) {
  }

  ngOnInit(): void {
    this.showAllEmployeePhoneDirectory()
  }

  showAllEmployeePhoneDirectory() {
    this.phoneDirectoryService.showAllEmployeePhoneDirectory().subscribe((result: any) => {
      this.employeePhoneDirectory = result
    })
  }

  onSearchTextEntered(searchValue: any) {
    this.searchText = searchValue
  }

  deletePhone(id: number) {
    this.phoneDirectoryService.deleteEmployeePhoneDirectory(id).subscribe((result: any) => {
      this.phoneDirectoryService.showAllEmployeePhoneDirectory()
    })
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }


}
