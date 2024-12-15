import { AppService } from './app.service';
import { saveReaderDto } from './dto/dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    saveReader(data: saveReaderDto): Promise<{
        HttpCode: number;
        message: string;
        data: unknown;
    }>;
    getAllReaders(): Promise<{
        HttpCode: number;
        message: string;
        data: unknown;
    }>;
}
