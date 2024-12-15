import { Injectable } from "@nestjs/common";
import { deleteArticleDto, saveArticleDto } from "./dto/dto";
import { PrismaService } from "./Prisma/prisma.service";


@Injectable()
export class AppService {
  constructor(
    private readonly prismaService : PrismaService
  ){}


  async saveArticle(data : saveArticleDto){
    try {

      //requtes pour l'insertion des articles 
      await this.prismaService
        .$queryRaw`INSERT INTO article (title, content) VALUES (${data.title}, ${data.content})`;
        
      //recuperation des articles apers insertion
      const articles = await this.getAllArticles();

      //reponse en cas de succes
      return {
        HttpCode : 201 ,
        message : 'Article saved succefully',
        data : articles
      };
    } catch (error) {
          console.log("verifier cette erreur",error);

          return {
            HttpCode : 400 ,
            message :'bad request , error saving article'
          }
      }
  }

  async getAllArticles(){
    try {
      //recuperons notre data 
      const articles = await this.prismaService.$queryRaw`
        SELECT * FROM "article"
      `;

      return {
        HttpCode : 200 ,
        message : 'article fetched successfully',
        data : articles
      }
    } catch (error) {
      //gestion d'erreurs
      console.log('verify',error)
      return{
        HttpCode : 400 ,
        message : 'Error while  fetching data',
        data : null
      }
    }
  }



  async deleteArticle(data: deleteArticleDto) {
    try {
      // Suppression de l'article avec l'ID spécifié
      await this.prismaService.$queryRaw`
        DELETE FROM "article" WHERE id = ${data.id}
      `;
  
      // Récupération des articles après suppression
      const articles = await this.getAllArticles();
  
      // Réponse en cas de succès
      return {
        HttpCode: 200,
        message: 'Article deleted successfully',
        data: articles.data,
      };
    } catch (error) {
      // Gestion des erreurs
      console.error(error);
  
      return {
        HttpCode: 400,
        message: 'Error while deleting article',
        data: null,
      };
    }
  }
  
  
}