import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('')
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    console.log(id);
    return this.tasksService.getTask(parseInt(id));
  }

  @Post('')
  createTask(@Body() body: any) {
    return this.tasksService.createTask(body);
  }

  @Put('')
  updateTask() {
    return this.tasksService.updateTask();
  }

  @Delete('')
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Patch('')
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
