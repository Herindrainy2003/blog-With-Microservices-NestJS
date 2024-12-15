import { Controller, Get, Inject, Post, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('reader')
export class ReaderController {
    constructor(
        @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy ,
      ){}


  @Post("/save-reader")
  saveReader(@Req() request){
    return this.natsClient.send({cmd : 'SAVE_READER'} , request.body)
  }
  

  @Get('getAllReaders')
  getReaders(@Req() req : Request){
    return this.natsClient.send({cmd : 'GET_ALL_READERS'} , req.body)
  }
}
