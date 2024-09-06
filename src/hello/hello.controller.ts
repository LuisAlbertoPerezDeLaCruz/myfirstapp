import {
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
  @Get(['', '/hello'])
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    return response.status(200).json({
      message: 'Hello World',
    });
  }

  @Get('hello/ticket/:id')
  async getTicket(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
  }

  @Get('hello/ticket-status/:active')
  async getStatus(@Param('active', ParseBoolPipe) active: boolean) {
    console.log(typeof active);
  }

  // @Get('hello/greets')
  // greets(@Query() query: { name: string; age: number }) {
  //   console.log('name', query.name);
  //   console.log('age', query.age);
  // }

  @Get('hello/greets')
  @UseGuards(AuthGuard)
  greets(@Query(ValidateuserPipe) query: { name: string; age: number }) {}
}
