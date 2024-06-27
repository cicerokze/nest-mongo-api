
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { User } from '../schemas/user.schema';
import { UserDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
    ) { }

    async createUser(UserDto: UserDto): Promise<User> {
        const createdUser = new this.userModel(UserDto);
        return createdUser.save();
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async updateUser(id: string, UserDto: UserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(
            id,
            UserDto,
            { new: true }
        ).exec();
    }

    async deleteUser(id: string): Promise<any> {
        return this.userModel.findByIdAndDelete(id).exec();
    }
}