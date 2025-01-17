import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './Prisma/prisma.service';



@Module({
  controllers: [AppController],
  providers: [AppService ,PrismaService],
})
export class AppModule {}
