import { deleteArticleDto, saveArticleDto } from "./dto/dto";
import { PrismaService } from "./Prisma/prisma.service";
export declare class AppService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
