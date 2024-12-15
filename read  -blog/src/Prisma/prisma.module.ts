import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";


@Module({
    providers : [PrismaService] , //appel a notre service 
})

export class PrismaModule{}