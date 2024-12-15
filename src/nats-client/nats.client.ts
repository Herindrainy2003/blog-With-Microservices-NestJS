
//specification de nats de notre client comme les transport et les options
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
    imports : [
        ClientsModule.register([
            {
                name : 'NATS_SERVICE' ,
                transport : Transport.NATS ,
                options : {
                    servers : ['nats://localhost:4222'],
                },
            },
        ]),
    ], 
    exports : [
        ClientsModule.register([
            {
                name : 'NATS_SERVICE',
                transport : Transport.NATS ,
                options : {
                    servers : ['nats://localhost:4222'],
                }
            }
        ])
    ]
})

export class NatsClientModule{}