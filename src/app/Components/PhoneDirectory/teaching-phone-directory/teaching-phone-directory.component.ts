import {Component, OnInit} from '@angular/core';
import {TeachingPhoneDirectory} from "../../../Models/PhoneDirectory/TeachingPhoneDirectory/teaching-phone-directory";
import {PhoneDirectoryService} from "../../../Services/PhoneDirectory/phone-directory.service";

@Component({
  selector: 'app-teaching-phone-directory',
  templateUrl: './teaching-phone-directory.component.html',
  styleUrls: ['./teaching-phone-directory.component.css']
})
export class TeachingPhoneDirectoryComponent implements OnInit{
  teachingPhoneDirectory: TeachingPhoneDirectory[]=[];
  searchText:string

  constructor(private phoneDirectoryService: PhoneDirectoryService) {
  }
  ngOnInit(): void {
    this.showAllTeachingPhone()
  }
  showAllTeachingPhone(){
    this.phoneDirectoryService.showAllTeachingPhoneDirectory().subscribe((result:any)=>{
      this.teachingPhoneDirectory=result
    })
  }
  onSearchTextEntered(searchValue:any){
    this.searchText=searchValue
  }
  deletePhone(id:number){
    this.phoneDirectoryService.deleteTeachingPhoneDirectory(id).subscribe((result:any)=>{
      this.phoneDirectoryService.showAllTeachingPhoneDirectory()
    })
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }
}
