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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ArticleController = class ArticleController {
    constructor(natsClient) {
        this.natsClient = natsClient;
    }
    saveArticle(req) {
        return this.natsClient.send({ cmd: 'SAVE_ARTICLES' }, req.body);
    }
    getAllAerticle(req) {
        return this.natsClient.send({ cmd: 'GET_ALL_ARTICLES' }, req.body);
    }
    deleteArticle(req) {
        return this.natsClient.send({ cmd: 'DELETE_ARTICLES' }, req.body);
    }
};
exports.ArticleController = ArticleController;
__decorate([
    (0, common_1.Post)('/save-article'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "saveArticle", null);
__decorate([
    (0, common_1.Get)('getAllArticle'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "getAllAerticle", null);
__decorate([
    (0, common_1.Post)('deleteArticle'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "deleteArticle", null);
exports.ArticleController = ArticleController = __decorate([
    (0, common_1.Controller)('article'),
    __param(0, (0, common_1.Inject)('NATS_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ArticleController);
//# sourceMappingURL=article.controller.js.map