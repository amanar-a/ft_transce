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
exports.UserController = exports.User_profile = exports.ExampleDto = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_dto_1 = require("../dto-classes/user.dto");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
const user_service_1 = require("./user.service");
const jwt_1 = require("@nestjs/jwt");
const class_validator_1 = require("class-validator");
const jwt_auth_gguard_1 = require("../guards/jwt-auth.gguard");
class ExampleDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(6, 9),
    (0, class_validator_1.NotContains)('/'),
    __metadata("design:type", String)
], ExampleDto.prototype, "userName", void 0);
exports.ExampleDto = ExampleDto;
class User_profile {
}
exports.User_profile = User_profile;
let UserController = class UserController {
    constructor(userService, usersRepository, jwtService) {
        this.userService = userService;
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    findAllUsers(request1) {
        return this.userService.findAll();
    }
    async userProfile(request1, user_profile) {
        const jwt = request1.headers.authorization.replace('Bearer ', '');
        const tokenInfo = this.jwtService.decode(jwt);
        if (user_profile.userName != null || user_profile.userName != undefined)
            tokenInfo.userId = user_profile.userName;
        let user = await this.usersRepository
            .createQueryBuilder('Users')
            .select(['Users.userName', 'Users.picture', 'Users.isActive'])
            .where('Users.email = :email', { email: tokenInfo.userId })
            .orWhere('Users.userName = :userName', { userName: tokenInfo.userId })
            .getOne();
        if (user) {
            let winMatch = await this.usersRepository.query(`SELECT COUNT(winner_user) FROM public."Games" WHERE "winner_user"= '${user.userName}'`);
            let loserMatch = await this.usersRepository.query(`SELECT COUNT(loser_user) FROM public."Games" WHERE "loser_user"= '${user.userName}'`);
            let userInfo = {
                userName: user === null || user === void 0 ? void 0 : user.userName,
                picture: user === null || user === void 0 ? void 0 : user.picture,
                country: 'Morocco',
                winMatch: winMatch[0].count,
                loserMatch: loserMatch[0].count,
                isActive: user === null || user === void 0 ? void 0 : user.isActive,
            };
            const gameHistory = await this.usersRepository.query(`select *  from public."Games" WHERE public."Games".winner_user = '${user.userName}' OR public."Games".loser_user = '${user.userName}'`);
            if (gameHistory[0] !== undefined)
                delete gameHistory[0].id;
            var result = [];
            for (const element of gameHistory) {
                const win_pic = await this.usersRepository.query(`select picture  from public."Users" WHERE public."Users"."userName" = '${element.winner_user}'`);
                const lose_pic = await this.usersRepository.query(`select picture  from public."Users" WHERE public."Users"."userName" = '${element.loser_user}'`);
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
            const profileInfo = {
                userInfo: userInfo,
                gameHistory: result,
            };
            return profileInfo;
        }
        return {};
    }
    userUser(userData) {
        this.userService.InsertUser(userData);
    }
    async chekUsername(request1, request) {
        const jwt = request1.headers.authorization.replace('Bearer ', '');
        let user = await this.userService.getUserJwt(jwt);
        let ret = {
            message: 'invalid username',
        };
        if (user.userName == null) {
            let re = await this.userService.findUser(request, user.email);
            if (re) {
                ret.message = 'valid username';
                return ret;
            }
        }
        else {
            ret.message = 'Already have a username';
            return ret;
        }
        return ret;
    }
    async getPicByuserName(request1, body) {
        let user1 = await this.usersRepository.findOneBy({
            userName: body.userName1,
        });
        let user2 = await this.usersRepository.findOneBy({
            userName: body.userName2,
        });
        if (user1 && user2) {
            let usersPic = {
                user1: user1.picture,
                user2: user2.picture,
            };
            return usersPic;
        }
        return {};
    }
    async getUsername(request1) {
        let re;
        const jwt = request1.headers.authorization.replace('Bearer ', '');
        let user = await this.userService.getUserJwt(jwt);
        if (user)
            return { exist: true };
        return { exist: false };
    }
};
__decorate([
    (0, common_1.Get)('users'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAllUsers", null);
__decorate([
    (0, common_1.Post)('profile'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, User_profile]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userProfile", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "userUser", null);
__decorate([
    (0, common_1.Post)('complet'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ExampleDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "chekUsername", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    (0, common_1.Post)('getPicture'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getPicByuserName", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    (0, common_1.Get)('CheckUserName'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsername", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [user_service_1.UserService,
        typeorm_2.Repository,
        jwt_1.JwtService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map