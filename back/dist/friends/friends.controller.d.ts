import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { friendsService } from './friends.service';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { FriendsInviteDto } from 'src/dto-classes/Frinends.dto';
export declare class frienduser {
    userName: string;
}
export declare class FriendsController {
    private readonly friendService;
    private userRepo;
    private readonly userService;
    private readonly jwtService;
    constructor(friendService: friendsService, userRepo: Repository<User>, userService: UserService, jwtService: JwtService);
    findall(data: FriendsInviteDto, request: Request): unknown;
    getOne(data: frienduser): unknown;
    findFriends(data: FriendsInviteDto, request: Request): unknown;
    acceptFriend(data: FriendsInviteDto, request: Request): unknown;
    sendInv(data: FriendsInviteDto, request: Request): unknown;
    cancellInv(data: FriendsInviteDto, request: Request): any;
    rejectInv(data: FriendsInviteDto, request: Request): unknown;
    BlockedFriends(request: Request): unknown;
    BlockFriend(data: frienduser, request: Request): any;
    unBlockFriend(data: frienduser, request: Request): any;
    removeFriend(): void;
}
