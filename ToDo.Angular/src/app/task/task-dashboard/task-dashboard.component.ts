import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CreateTaskComponent } from '../../task/create-task/create-task.component';
import { faPlus, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
declare const bootstrap: any;

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrl: './task-dashboard.component.css'
})
export class TaskDashboardComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  tasks: Array<TaskLineItem> = [];
  faPlus: IconDefinition = faPlus;
  faTrash: IconDefinition = faTrash;

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  addTask() {
    this.container.clear();
    let createTaskComponent = this.container.createComponent(CreateTaskComponent);
    createTaskComponent.instance.tasks = this.tasks;
    const createTaskModal = new bootstrap.Modal(document.getElementById('create-task-container'), null)
    createTaskModal.show();
  }
}

export class TaskLineItem {
  description: string = '';
}
