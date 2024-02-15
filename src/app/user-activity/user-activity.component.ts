import {Component, OnInit} from '@angular/core';
import {Showallexport} from "../Models/showAllExports/showallexport";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute} from "@angular/router";
import {UserActivity} from "../Models/userActivity/user-activity";
import {UserActivityService} from "../Services/userActivity/user-activity.service";

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.css']
})
export class UserActivityComponent implements OnInit{
  showUserActivity:UserActivity[]
  x:any;
  searchText:string

  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }
  constructor(private userActivityService: UserActivityService,private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.getUserActivity()

  }

  getUserActivity() {
    return this.userActivityService.getUserActivity().subscribe((getAllActivity:any)=>{
      this.showUserActivity=getAllActivity;
    })
    console.log(this.showUserActivity)
  }



}
