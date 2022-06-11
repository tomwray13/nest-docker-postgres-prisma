import { Injectable } from '@nestjs/common';
import { Tweets } from '@prisma/client';
import { PrismaService } from './services/prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async getHello(): Promise<Tweets[]> {
    return await this.prisma.tweets.findMany();
  }
}
