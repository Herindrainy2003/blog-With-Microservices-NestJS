import { ClientProxy } from '@nestjs/microservices';
export declare class ReaderController {
    private readonly natsClient;
    constructor(natsClient: ClientProxy);
    saveReader(request: any): import("rxjs").Observable<any>;
    getReaders(req: Request): import("rxjs").Observable<any>;
}
