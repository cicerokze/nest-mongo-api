
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseProviders } from './database.providers';

const db = process.env.DB_URI || 'mongodb://localhost/nest-mongo-api';

@Module({
    imports: [
        MongooseModule.forRoot(db),
    ],
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule { }