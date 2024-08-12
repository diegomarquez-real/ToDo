import { Component, Input } from '@angular/core';
import { TasksComponent } from '../../tasks/tasks.component';
declare const bootstrap: any;

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent {
  @Input() tasksComponent!: TasksComponent;

  description: string = '';

  saveTask() {
    const createTaskModal = bootstrap.Modal.getInstance(document.getElementById('create-task-container'));
    this.tasksComponent.tasks.push({ description: this.description });
    createTaskModal.hide();
  }
}
