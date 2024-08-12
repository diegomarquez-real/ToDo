import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Array<TaskLineItem> = [{ description: 'test task...' }];

  removeTask(index: number) {
    this.tasks.splice(index, 1); 
  }
}

class TaskLineItem {
  description: string = '';
}
