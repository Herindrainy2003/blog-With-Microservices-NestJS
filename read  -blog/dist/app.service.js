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
    async saveReader(data) {
        try {
            await this.prismaService
                .$queryRaw `INSERT INTO reader (email) VALUES (${data.email})`;
            const readers = await this.getAllReaders();
            return {
                HttpCode: 201,
                message: 'Reader saved successfully',
                data: readers.data,
            };
        }
        catch (error) {
            console.log(error);
            return {
                HttpCode: 400,
                message: 'Error saving reader',
                data: null,
            };
        }
    }
    async getAllReaders() {
        try {
            const readers = await this.prismaService.$queryRaw `SELECT * FROM reader`;
            return {
                HttpCode: 201,
                message: 'Readers fetched successfully',
                data: readers,
            };
        }
        catch (error) {
            console.log(error);
            return {
                HttpCode: 400,
                message: 'Error while fetching articles',
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