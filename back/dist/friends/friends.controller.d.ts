import { JwtService } from '@nestjs/jwt';
import { FriendLsit } from 'src/entities/friendList.entity';
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
    findall(data: FriendsInviteDto, request: Request): Promise<{
        all_users: any;
        user_rinvite: any;
        user_friends: any;
        user_sinvite: any;
        blocked_friends: any;
    }>;
    getOne(data: frienduser): Promise<any[] | {
        userInfo: {
            userName: string;
            picture: any;
            country: string;
            winMatch: Promise<any>;
            loserMatch: Promise<any>;
        };
        gameHistory: any[];
    }>;
    findFriends(data: FriendsInviteDto, request: Request): Promise<FriendLsit[]>;
    acceptFriend(data: FriendsInviteDto, request: Request): Promise<void>;
    sendInv(data: FriendsInviteDto, request: Request): Promise<void>;
    cancellInv(data: FriendsInviteDto, request: Request): Promise<void>;
    rejectInv(data: FriendsInviteDto, request: Request): Promise<void>;
    BlockedFriends(request: Request): Promise<any>;
    BlockFriend(data: frienduser, request: Request): Promise<void>;
    unBlockFriend(data: frienduser, request: Request): Promise<void>;
    removeFriend(): void;
}
