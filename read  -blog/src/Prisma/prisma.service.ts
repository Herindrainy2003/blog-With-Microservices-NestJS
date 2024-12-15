
//prisma service occupe la logique de la connexion du base des donnes en utilisant Prisma

import { Injectable } from '@nestjs/common';
import {PrismaClient} from '@prisma/client'
import { env } from 'process';


@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            datasources : {
                db : {
                    url  : env.DATABASE_URL,
                }
            }
        })
    }
}