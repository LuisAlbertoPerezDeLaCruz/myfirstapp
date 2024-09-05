import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  tasks = [];
  getTasks() {
    return this.tasks;
  }

  createTask(task: any) {
    console.log(task);
    this.tasks.push(task);
    return task;
  }

  updateTask() {
    return 'Actualizando tareas';
  }

  deleteTask() {
    return 'Eliminando tarea';
  }

  updateTaskStatus() {
    return 'Actualizando estado de una tarea';
  }
}
