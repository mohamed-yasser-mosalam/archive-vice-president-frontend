import {Component, HostListener, OnInit} from '@angular/core';
import {Showallexport} from "../../../Models/showAllExports/showallexport";
import {ExportServiceService} from "../../../Services/ExportsServices/export-service.service";
import {ActivatedRoute} from "@angular/router";
import {Task} from "../../../Models/task/task";
import {TaskService} from "../../../Services/Task/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  tasks: Task[]
  searchText:string;
  isScrolled = false;

  constructor(private service: TaskService){}


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 10) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  ngOnInit(): void {
    this.findAll()
  }

  findAll() {
    return this.service.findAll().subscribe((task:any)=>{
      this.tasks=task;
    })
  }


  delete(id: number) {
    this.service.delete(id).subscribe((res:any)=>{
      this.findAll();
    })
  }
}
