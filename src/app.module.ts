import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { HelloModule } from './hello/hello.module';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TasksModule, HelloModule, UsersModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
