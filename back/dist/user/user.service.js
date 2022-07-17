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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
let UserService = class UserService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async setTwoFactorAuthenticationSecret(secret, email) {
        let id = await this.usersRepository.query(`select id from public."Users" WHERE public."Users"."email" = '${email}'`);
        return this.usersRepository.update(id, {
            twoFactorAuthenticationSecret: secret,
        });
    }
    async turnOnTwoFactorAuthentication(email) {
        let id;
        try {
            id = await this.usersRepository.findOneBy({ email: email });
        }
        catch (e) {
        }
        await this.usersRepository.update(id.id, {
            isTwoFactorAuthenticationEnabled: true,
        });
    }
    async InsertUser(userDto) {
        try {
            const userData = await this.usersRepository
                .createQueryBuilder()
                .insert()
                .into('Users')
                .values(userDto)
                .onConflict('("id") DO NOTHING')
                .execute();
        }
        catch (_a) {
            return 'Message Receiver!';
        }
    }
    async findAll() {
        return await this.usersRepository.query(`select * from Users`);
    }
    async findUser(oldUserName, newUserName, email) {
        const user = await this.usersRepository
            .createQueryBuilder()
            .select('user')
            .from(user_entity_1.User, 'user')
            .where('user.userName = :name', { name: newUserName })
            .getOne();
        await this.updateUsername(newUserName, oldUserName);
        await this.usersRepository.query(`UPDATE public."Users" SET "userName"= '${newUserName}' WHERE  "userName"= '${oldUserName}'`);
        return true;
    }
    async updateActive(stats, userName) {
        var get = await this.usersRepository.query(`UPDATE public."Users" SET "isActive"= '${stats}' WHERE  "userName"= '${userName}'`);
    }
    async findByemail(email) {
        return this.usersRepository.findOneBy({ email: email });
    }
    async getUserJwt(token) {
        const tokenInfo = this.jwtService.decode(token);
        let user = await this.usersRepository.findOneBy({ email: tokenInfo.userId });
        if (user)
            return user;
    }
    async findByUserName(userName) {
        return await this.usersRepository.findOneBy({ userName: userName });
    }
    async updateUsername(newName, oldName) {
        await this.usersRepository.query(`UPDATE public."FriendBlocked" SET "Blocker"='${newName}' WHERE "Blocker"='${oldName}'`);
        await this.usersRepository.query(`UPDATE public."FriendBlocked" SET "Blocked"='${newName}' WHERE "Blocked"='${oldName}'`);
        await this.usersRepository.query(`UPDATE public."FriendLsit" SET "userName"='${newName}' WHERE "userName"='${oldName}'`);
        await this.usersRepository.query(`UPDATE public."FriendShip" SET "sender_id"='${newName}' WHERE "sender_id"='${oldName}'`);
        await this.usersRepository.query(`UPDATE public."FriendShip" SET "recipent_id"='${newName}' WHERE "recipent_id"='${oldName}'`);
        await this.usersRepository.query(`UPDATE public."Games" SET "winner_user"='${newName}' WHERE "winner_user"='${oldName}'`);
        await this.usersRepository.query(`UPDATE public."Games" SET "loser_user"='${newName}' WHERE "loser_user"='${oldName}'`);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map