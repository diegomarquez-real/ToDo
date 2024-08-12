import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { TaskDashboardComponent } from './task/task-dashboard/task-dashboard.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TaskDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
