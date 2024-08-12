import { Component, Input } from '@angular/core';
import { TaskLineItem } from '../../task/task-dashboard/task-dashboard.component';
declare const bootstrap: any;

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent {
  @Input() tasks!: Array<TaskLineItem>;
  description: string = '';

  saveTask() {
    const createTaskModal = bootstrap.Modal.getInstance(document.getElementById('create-task-container'));
    this.tasks.push({ description: this.description });
    createTaskModal.hide();
  }
}
