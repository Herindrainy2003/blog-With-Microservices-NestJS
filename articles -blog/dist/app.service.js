"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./Prisma/prisma.service");
let AppService = class AppService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async saveArticle(data) {
        try {
            await this.prismaService
                .$queryRaw `INSERT INTO article (title, content) VALUES (${data.title}, ${data.content})`;
            const articles = await this.getAllArticles();
            return {
                HttpCode: 201,
                message: 'Article saved succefully',
                data: articles
            };
        }
        catch (error) {
            console.log("verifier cette erreur", error);
            return {
                HttpCode: 400,
                message: 'bad request , error saving article'
            };
        }
    }
    async getAllArticles() {
        try {
            const articles = await this.prismaService.$queryRaw `
        SELECT * FROM "article"
      `;
            return {
                HttpCode: 200,
                message: 'article fetched successfully',
                data: articles
            };
        }
        catch (error) {
            console.log('verify', error);
            return {
                HttpCode: 400,
                message: 'Error while  fetching data',
                data: null
            };
        }
    }
    async deleteArticle(data) {
        try {
            await this.prismaService.$queryRaw `
        DELETE FROM "article" WHERE id = ${data.id}
      `;
            const articles = await this.getAllArticles();
            return {
                HttpCode: 200,
                message: 'Article deleted successfully',
                data: articles.data,
            };
        }
        catch (error) {
            console.error(error);
            return {
                HttpCode: 400,
                message: 'Error while deleting article',
                data: null,
            };
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppService);
//# sourceMappingURL=app.service.js.map