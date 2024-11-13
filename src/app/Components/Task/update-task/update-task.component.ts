import {Component, OnInit} from '@angular/core';
import {Task} from "../../../Models/task/task";
import {TaskService} from "../../../Services/Task/task.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit{

  task: Task = {} as Task;
  id: number;

  constructor(private taskService: TaskService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.taskService.findById(this.id).subscribe(
      (res) => this.task = res
    )
  }

  update(id: number) {
    this.taskService.update(this.task, id).subscribe(
      () => this.router.navigate(["/tasks"]),
    )

  }



}
