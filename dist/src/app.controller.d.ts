import { ClientProxy } from '@nestjs/microservices';
export declare class AppController {
    private readonly natsClient;
    constructor(natsClient: ClientProxy);
    saveReader(request: any): import("rxjs").Observable<any>;
    getReaders(req: Request): import("rxjs").Observable<any>;
    saveArticle(req: Request): import("rxjs").Observable<any>;
    getAllAerticle(req: Request): import("rxjs").Observable<any>;
    deleteArticle(req: Request): import("rxjs").Observable<any>;
}
