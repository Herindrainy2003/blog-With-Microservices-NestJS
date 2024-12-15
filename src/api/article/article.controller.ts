import { Controller, Get, Inject, Post, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('article')
export class ArticleController {
    constructor(
        @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy , //instance a la nats service
      ){}


  @Post('/save-article')
  saveArticle(@Req() req: Request){
    return this.natsClient.send({cmd : 'SAVE_ARTICLES'} , req.body) //on envoie notre requete saisissez par le client avec le cmd(identifiant de cette requete) au service specifique
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
