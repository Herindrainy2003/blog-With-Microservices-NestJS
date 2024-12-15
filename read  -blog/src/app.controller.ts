//app.controller.ts
import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { saveReaderDto } from './dto/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'SAVE_READER' }) //meme cmd que dans notre gateWay 
  async saveReader(@Payload() data: saveReaderDto) { //on recupere le req.body depuis notre gateway avec la methode payload et on les assignes a notre dto 
    return this.appService.saveReader(data);
  }

  @MessagePattern({ cmd: 'GET_ALL_READERS' })
  async getAllReaders() {
    return this.appService.getAllReaders();
  }
}