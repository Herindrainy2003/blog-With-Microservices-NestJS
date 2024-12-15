import { PrismaService } from './Prisma/prisma.service';
import { saveReaderDto } from './dto/dto';
export declare class AppService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
