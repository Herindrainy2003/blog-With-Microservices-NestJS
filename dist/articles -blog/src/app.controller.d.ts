import { AppService } from './app.service';
import { deleteArticleDto, saveArticleDto } from './dto/dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    saveArticle(data: saveArticleDto): Promise<{
        HttpCode: number;
        message: string;
        data: {
            HttpCode: number;
            message: string;
            data: unknown;
        };
    } | {
        HttpCode: number;
        message: string;
        data?: undefined;
    }>;
    getAllArticles(): Promise<{
        HttpCode: number;
        message: string;
        data: unknown;
    }>;
    deleteArticle(data: deleteArticleDto): Promise<{
        HttpCode: number;
        message: string;
        data: unknown;
    }>;
}
