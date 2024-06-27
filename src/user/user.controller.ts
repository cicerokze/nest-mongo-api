import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";
import { UserService } from "./user.service";
import { User } from "src/schemas/user.schema";

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Post()
    async createUser(@Body() UserDto: UserDto): Promise<User> {
        return this.userService.createUser(UserDto);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() UserDto: UserDto) {
        return this.userService.updateUser(id, UserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id);
    }
}