import { Controller, Get } from '@nestjs/common';

@Controller({})
export class TasksController {
  @Get('/tasks')
  getAllTasks() {
    return 'All Tasks';
  }
}
