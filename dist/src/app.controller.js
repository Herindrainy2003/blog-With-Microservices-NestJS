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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let AppController = class AppController {
    constructor(natsClient) {
        this.natsClient = natsClient;
    }
    saveReader(request) {
        return this.natsClient.send({ cmd: 'SAVE_READER' }, request.body);
    }
    getReaders(req) {
        return this.natsClient.send({ cmd: 'GET_ALL_READERS' }, req.body);
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
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)("/save-reader"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "saveReader", null);
__decorate([
    (0, common_1.Get)('getAllReaders'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getReaders", null);
__decorate([
    (0, common_1.Post)('/save-article'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "saveArticle", null);
__decorate([
    (0, common_1.Get)('getAllArticle'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAllAerticle", null);
__decorate([
    (0, common_1.Post)('deleteArticle'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteArticle", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('api/'),
    __param(0, (0, common_1.Inject)('NATS_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], AppController);
//# sourceMappingURL=app.controller.js.map