import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { NatsClientModule } from './nats-client/nats.client';
// import { AppController } from './app.controller';
import { ArticleController } from './api/article/article.controller';
import { ReaderController } from './api/reader/reader.controller';


@Module({
  imports : [NatsClientModule],
  controllers: [ArticleController ,ReaderController],
  providers: [AppService],
})
export class AppModule {}
