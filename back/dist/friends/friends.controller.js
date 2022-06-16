"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendsController = exports.frienduser = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const friends_service_1 = require("./friends.service");
const user_entity_1 = require("../entities/user.entity");
const class_validator_1 = require("class-validator");
const jwt_auth_gguard_1 = require("../guards/jwt-auth.gguard");
const user_service_1 = require("../user/user.service");
const Frinends_dto_1 = require("../dto-classes/Frinends.dto");
class frienduser {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], frienduser.prototype, "userName", void 0);
exports.frienduser = frienduser;
let FriendsController = class FriendsController {
    constructor(friendService, userRepo, userService, jwtService) {
        this.friendService = friendService;
        this.userRepo = userRepo;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async findall(data, request) {
        const jwt = request.headers.authorization.replace('Bearer ', '');
        const tokenInfo = this.jwtService.decode(jwt);
        const user = await this.userService.getUserJwt(jwt);
        const userName = await this.userRepo.query(`select public."Users"."userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
        const userId = await this.userRepo.query(`select "id" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
        return await this.friendService.users(userName[0].userName, userId[0].id);
    }
    async getOne(data) {
        this.friendService.friendStatus(data.userName);
        const pic = await this.userRepo.query(`SELECT COUNT(winner_user) FROM public."Games" WHERE "winner_user" = '${data.userName}'`);
        if (pic.length > 0) {
            let userInfo = {
                userName: data.userName,
                picture: pic[0].picture,
                country: 'Morocco',
                winMatch: this.userRepo.query(`SELECT COUNT(winner_user) FROM public."Games" WHERE "winner_user"= '${data.userName}'`),
                loserMatch: this.userRepo.query(`SELECT COUNT(loser_user) FROM public."Games" WHERE "winner_user"= '${data.userName}'`),
            };
            const gameHistory = await this.userRepo.query(`select *  from public."Games" WHERE public."Games".winner_user = '${data.userName}' OR public."Games".loser_user = '${data.userName}'`);
            var result = [];
            if (gameHistory.length > 0) {
                delete gameHistory[0].id;
                for (const element of gameHistory) {
                    const win_pic = await this.userRepo.query(`select picture  from public."Users" WHERE public."Users"."userName" = '${element.winner_user}'`);
                    const lose_pic = await this.userRepo.query(`select picture  from public."Users" WHERE public."Users"."userName" = '${element.loser_user}'`);
                    result.push({
                        winner: {
                            userName: element.winner_user,
                            score: element.Score.split('-')[0],
                            picture: win_pic[0].picture,
                        },
                        loser: {
                            userName: element.loser_user,
                            score: element.Score.split('-')[1],
                            picture: lose_pic[0].picture,
                        },
                        played_at: gameHistory[0].played_at,
                    });
                }
            }
            const profileInfo = {
                userInfo: userInfo,
                gameHistory: result,
            };
            return profileInfo;
        }
        return [];
    }
    async findFriends(data, request) {
        const jwt = request.headers.authorization.replace('Bearer ', '');
        const tokenInfo = this.jwtService.decode(jwt);
        const userName = await this.userRepo.query(`select "id" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
        return this.friendService.findAll(userName);
    }
    async acceptFriend(data, request) {
        const jwt = request.headers.authorization.replace('Bearer ', '');
        const tokenInfo = this.jwtService.decode(jwt);
        const userName = await this.userRepo.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
        const id = await this.userRepo.query(`select "id" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
        return this.friendService.acceptFriend(userName[0].userName, data.sender_id, id[0].id);
    }
    async sendInv(data, request) {
        const jwt = request.headers.authorization.replace('Bearer ', '');
        const tokenInfo = this.jwtService.decode(jwt);
        const user = await this.userRepo.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
        return this.friendService.sendInv(user[0].userName, data.recipent_id);
    }
    async cancellInv(data, request) {
        const jwt = request.headers.authorization.replace('Bearer ', '');
        const tokenInfo = this.jwtService.decode(jwt);
        const user = await this.userRepo.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
        this.friendService.cancellInv(user[0].userName, data.recipent_id);
    }
    async rejectInv(data, request) {
        const jwt = request.headers.authorization.replace('Bearer ', '');
        const tokenInfo = this.jwtService.decode(jwt);
        const userName = await this.userRepo.query(`select public."Users"."userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
        const userId = await this.userRepo.query(`select "id" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
        return this.friendService.rejectFriend(userName[0].userName, data.recipent_id, userId[0].id);
    }
    async BlockedFriends(request) {
        const jwt = request.headers.authorization.replace('Bearer ', '');
        const tokenInfo = this.jwtService.decode(jwt);
        const userId = await this.userRepo.query(`select "id" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
        let user_blocked = await this.userRepo
            .query(`select public."Users"."userName", public."Users"."picture"  FROM public."Users"
		WHERE  public."Users"."userName" IN 
		(select "Blocked" FROM public."FriendBlocked" WHERE public."FriendBlocked"."userId" = '${userId[0].id}')
		`);
        return user_blocked;
    }
    async BlockFriend(data, request) {
        const jwt = request.headers.authorization.replace('Bearer ', '');
        const tokenInfo = this.jwtService.decode(jwt);
        let CurrentUserName;
        let CurrentUserId;
        let FriendUserName;
        let FriendUserID;
        const userId = await this.userRepo.query(`select "id" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
        const userName = await this.userRepo.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
        const FriendId = await this.userRepo.query(`select "id" from public."Users" WHERE public."Users"."userName" = '${data.userName}'`);
        CurrentUserId = userId[0].id;
        CurrentUserName = userName[0].userName;
        FriendUserName = data.userName;
        FriendUserID = FriendId[0].id;
        const ifUserBlocked = await this.userRepo.query(`SELECT  "Blocker" \
    FROM public."FriendBlocked" WHERE "Blocker" = '${data.userName}' AND "Blocked" = '${FriendUserName}'`);
        if (ifUserBlocked.length == 0 && CurrentUserName != FriendUserName) {
            await this.userRepo.query(`DELETE FROM public."FriendLsit"
        WHERE public."FriendLsit"."userName" = '${CurrentUserName}' AND  public."FriendLsit"."userId" = '${FriendUserID}'`);
            await this.userRepo.query(`DELETE FROM public."FriendLsit"
          WHERE public."FriendLsit"."userName" = '${FriendUserName}' AND  public."FriendLsit"."userId" = '${CurrentUserId}'`);
            FriendUserID = FriendId[0].id;
            await this.userRepo.query(`INSERT INTO public."FriendBlocked"("Blocker", "userId", "Blocked") VALUES ('${CurrentUserName}', '${CurrentUserId}', '${FriendUserName}')`);
        }
    }
    async unBlockFriend(data, request) {
        const jwt = request.headers.authorization.replace('Bearer ', '');
        const tokenInfo = this.jwtService.decode(jwt);
        const userId = await this.userRepo.query(`select "id" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
        await this.userRepo.query(`DELETE FROM public."FriendBlocked" WHERE  "Blocked" = '${data.userName}' AND "userId" = '${userId[0].id}'`);
    }
    removeFriend() {
    }
};
__decorate([
    (0, common_1.Get)('all'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Frinends_dto_1.FriendsInviteDto, Object]),
    __metadata("design:returntype", Promise)
], FriendsController.prototype, "findall", null);
__decorate([
    (0, common_1.Post)('one'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [frienduser]),
    __metadata("design:returntype", Promise)
], FriendsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Frinends_dto_1.FriendsInviteDto, Object]),
    __metadata("design:returntype", Promise)
], FriendsController.prototype, "findFriends", null);
__decorate([
    (0, common_1.Post)('accept'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Frinends_dto_1.FriendsInviteDto, Object]),
    __metadata("design:returntype", Promise)
], FriendsController.prototype, "acceptFriend", null);
__decorate([
    (0, common_1.Post)('send'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Frinends_dto_1.FriendsInviteDto, Object]),
    __metadata("design:returntype", Promise)
], FriendsController.prototype, "sendInv", null);
__decorate([
    (0, common_1.Post)('cancell'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Frinends_dto_1.FriendsInviteDto, Object]),
    __metadata("design:returntype", Promise)
], FriendsController.prototype, "cancellInv", null);
__decorate([
    (0, common_1.Post)('reject'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Frinends_dto_1.FriendsInviteDto, Object]),
    __metadata("design:returntype", Promise)
], FriendsController.prototype, "rejectInv", null);
__decorate([
    (0, common_1.Get)('block'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FriendsController.prototype, "BlockedFriends", null);
__decorate([
    (0, common_1.Post)('block'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [frienduser, Object]),
    __metadata("design:returntype", Promise)
], FriendsController.prototype, "BlockFriend", null);
__decorate([
    (0, common_1.Post)('unblock'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [frienduser, Object]),
    __metadata("design:returntype", Promise)
], FriendsController.prototype, "unBlockFriend", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FriendsController.prototype, "removeFriend", null);
FriendsController = __decorate([
    (0, common_1.Controller)('friends'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [friends_service_1.friendsService,
        typeorm_2.Repository,
        user_service_1.UserService,
        jwt_1.JwtService])
], FriendsController);
exports.FriendsController = FriendsController;
//# sourceMappingURL=friends.controller.js.map