import { Component, Input } from '@angular/core';
import { TaskDashboardComponent } from '../../task/task-dashboard/task-dashboard.component';
declare const bootstrap: any;

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent {
  @Input() taskDashboardComponent!: TaskDashboardComponent;

  description: string = '';

  saveTask() {
    const createTaskModal = bootstrap.Modal.getInstance(document.getElementById('create-task-container'));
    this.taskDashboardComponent.tasks.push({ description: this.description });
    createTaskModal.hide();
  }
}
