import {Component, OnInit} from '@angular/core';
import {FacultyPhoneDirectory} from "../../../Models/PhoneDirectory/FacultyPhoneDirectory/faculty-phone-directory";
import {PhoneDirectoryService} from "../../../Services/PhoneDirectory/phone-directory.service";
import {TeachingPhoneDirectory} from "../../../Models/PhoneDirectory/TeachingPhoneDirectory/teaching-phone-directory";

@Component({
  selector: 'app-faculty-phone-directory',
  templateUrl: './faculty-phone-directory.component.html',
  styleUrls: ['./faculty-phone-directory.component.css']
})
export class FacultyPhoneDirectoryComponent implements OnInit{
  facultyPhoneDirectory: FacultyPhoneDirectory[]
  searchText:string

  constructor(private phoneDirectoryService: PhoneDirectoryService) {
  }
  ngOnInit(): void {
    this.showAllFacultyPhone()
  }
  showAllFacultyPhone(){
    this.phoneDirectoryService.showAllFacultyPhoneDirectory().subscribe((result:any)=>{
      this.facultyPhoneDirectory=result
    })
  }
  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }
  deletePhone(id:number){
    this.phoneDirectoryService.deleteFacultyPhoneDirectory(id).subscribe((result:any)=>{
      this.phoneDirectoryService.showAllFacultyPhoneDirectory()
    })
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }
}
