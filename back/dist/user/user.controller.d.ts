import { UserDto } from "src/dto-classes/user.dto";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { UserService } from "./user.service";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";
export declare class ExampleDto {
    userName: string;
    imageName: string;
}
export declare class User_profile {
    userName: User;
}
export declare class UserController {
    private readonly userService;
    private usersRepository;
    private readonly jwtService;
    constructor(userService: UserService, usersRepository: Repository<User>, jwtService: JwtService);
    findAllUsers(request1: Request): Promise<any>;
    userProfile(request1: Request, user_profile: User_profile): Promise<{}>;
    userUser(userData: UserDto): void;
    getPicByuserName(request1: Request, body: any): Promise<{}>;
    getUsername(request1: Request): Promise<{
        exist: boolean;
    }>;
}
