import { Controller, Get } from '@nestjs/common';
import { Tweets } from '@prisma/client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Tweets[]> {
    return this.appService.getHello();
  }
}
