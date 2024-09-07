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
import { createTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
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
  createTask(@Body() body: createTaskDto) {
    return this.tasksService.createTask(body);
  }

  @Put('')
  updateTask(@Body() body: updateTaskDto) {
    return this.tasksService.updateTask(body);
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
