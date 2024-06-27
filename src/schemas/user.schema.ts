import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    cep: String,
    street: String,
    number: String,
    neighbor: String,
    city: String,
    state: String,
});

export interface User extends mongoose.Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    cep: string;
    street: string;
    number: string;
    neighbor: string;
    city: string;
    state: string;
}
