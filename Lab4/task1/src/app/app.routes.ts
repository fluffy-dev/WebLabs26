import { Routes } from '@angular/router';
import { Task1Component } from './tasks/task1.component';
import { Task2Component } from './tasks/task2.component';
import { Task3Component } from './tasks/task3.component';

export const routes: Routes = [
  { path: '', redirectTo: 'task1', pathMatch: 'full' },
  {
    path: 'task1',
    component: Task1Component,
    title: 'Task 1: Components & Forms',
  },
  {
    path: 'task2',
    component: Task2Component,
    title: 'Task 2: Control Flow & Signals',
  },
  { path: 'task3', component: Task3Component, title: 'Task 3: Forms & DI' },
];
