import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CreateTaskComponent } from '../../task/create-task/create-task.component';
declare const bootstrap: any;

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrl: './task-dashboard.component.css'
})
export class TaskDashboardComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  tasks: Array<TaskLineItem> = [{ description: 'test task...' }];

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  addTask() {
    this.container.clear();
    let createTaskComponent = this.container.createComponent(CreateTaskComponent);
    createTaskComponent.instance.taskDashboardComponent = this;
    const createTaskModal = new bootstrap.Modal(document.getElementById('create-task-container'), null)
    createTaskModal.show();
  }
}

class TaskLineItem {
  description: string = '';
}
