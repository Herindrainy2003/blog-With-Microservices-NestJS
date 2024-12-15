import { ClientProxy } from '@nestjs/microservices';
export declare class ArticleController {
    private readonly natsClient;
    constructor(natsClient: ClientProxy);
    saveArticle(req: Request): import("rxjs").Observable<any>;
    getAllAerticle(req: Request): import("rxjs").Observable<any>;
    deleteArticle(req: Request): import("rxjs").Observable<any>;
}
