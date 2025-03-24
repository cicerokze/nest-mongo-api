import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config()

const db = process.env.DB_URI || 'mongodb://localhost/nest-mongo-api';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(db),
    },
];
