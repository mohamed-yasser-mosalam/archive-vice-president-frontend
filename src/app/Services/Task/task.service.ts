import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";
import {Task} from "../../Models/task/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = baseUrl;

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Task[]>(`${this.url}/task/tasks`);
  }

  findByDate() {
    return this.http.get<Task[]>(`${this.url}/task/task-date`);
  }

  findById(id: number) {
    return this.http.get<Task>(`${this.url}/task/task?id=${id}`);
  }

  insert(task: Task) {
    return this.http.post<Task>(`${this.url}/task/task`, task);
  }

  update( task: Task  , id : number) {
    return this.http.put<Task>(`${this.url}/task/task?id=${id}`, task);
  }

  delete(id: number) {
    return this.http.delete<Task>(`${this.url}/task/task?id=${id}`);
  }
}
