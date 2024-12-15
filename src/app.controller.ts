import { Controller, Get, Inject, Post, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Controller('api/')
export class AppController {
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

  @Post('/save-article')
  saveArticle(@Req() req: Request){
    return this.natsClient.send({cmd : 'SAVE_ARTICLES'} , req.body)
  }

  @Get('getAllArticle')
  getAllAerticle(@Req() req: Request){
    return this.natsClient.send({cmd : 'GET_ALL_ARTICLES'} , req.body)
  }

  @Post('deleteArticle')
  deleteArticle(@Req() req: Request){
    return this.natsClient.send({cmd: 'DELETE_ARTICLES'} , req.body)
  }

}
