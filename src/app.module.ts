import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { HelloModule } from './hello/hello.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TasksModule, HelloModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
