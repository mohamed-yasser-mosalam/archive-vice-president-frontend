import { Component } from '@angular/core';
import {Task} from "../../../Models/task/task";
import {TaskService} from "../../../Services/Task/task.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  task : Task = {} as Task;


  constructor(private taskService: TaskService , private router: Router) {}

  insert() {
      this.taskService.insert(this.task).subscribe(
        ()=> this.router.navigate(["/tasks"]),
      )
  }
}
