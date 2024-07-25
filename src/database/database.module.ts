
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseProviders } from './database.providers';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest-mongo-api'),
    ],
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule { }