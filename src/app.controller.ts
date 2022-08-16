import {
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseInterceptors(CacheInterceptor) // automatically cache the response
  @CacheTTL(30)
  @Get()
  getHello(): Promise<any> {
    return this.appService.getHello();
  }
}
