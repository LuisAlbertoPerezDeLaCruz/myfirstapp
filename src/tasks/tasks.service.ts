import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {
  tasks = [];
  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => {
      return task.id === id;
    });
    if (!taskFound) {
      return new NotFoundException(`Tarea ${id} no encontrada`);
    }
    return taskFound;
  }

  createTask(task: any) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
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
