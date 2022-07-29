import {
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { Tweets } from '@prisma/client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseInterceptors(CacheInterceptor) // automatically cache the response
  @CacheTTL(30)
  @Get()
  getHello(): Promise<Tweets[]> {
    return this.appService.getHello();
  }
}
