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
exports.chatRoomController = exports.gID = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chatRoom_service_1 = require("./chatRoom.service");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
const chatRoom_entity_1 = require("../entities/chatRoom.entity");
const jwt_auth_gguard_1 = require("../guards/jwt-auth.gguard");
class gID {
}
exports.gID = gID;
let chatRoomController = class chatRoomController {
    constructor(RoomService, roomRep, usersRepository, jwtService) {
        this.RoomService = RoomService;
        this.roomRep = roomRep;
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async createRoom(body, request) {
        console.log("here");
        const jwt = request.headers.authorization.replace('Bearer ', '');
        this.RoomService.createRoom(jwt, body);
    }
    async addUser(gameId, request) {
        console.log("here");
        const jwt = request.headers.authorization.replace('Bearer ', '');
        const tokenInfo = this.jwtService.decode(jwt);
        let user = await this.usersRepository.createQueryBuilder('Users').where('Users.email = :email', { email: tokenInfo.userId }).getOne();
        const chat = await this.roomRep
            .createQueryBuilder("chat")
            .leftJoinAndSelect("chat.members", "Users").where('chat.id = :id', { id: gameId.gameId })
            .getOne();
        chat[0].members = [...chat[0].members, user];
        chat[0].save();
    }
    async getPublicRooms(body) {
        return await this.RoomService.getPublicRooms();
    }
    async getAllRooms(body) {
        return await this.RoomService.getAllRooms();
    }
    async addAdministrator(body) {
        console.log(body);
        return await this.RoomService.addAdministrator(body.roomId, body.userName);
    }
    async getRoomMembers(body) {
        let room = (await this.RoomService.getRoomById(body.roomId));
        if (room !== "undefined" && room !== null) {
            let members = room.members;
            return members;
        }
        else
            return null;
    }
    async getRoomAdministrators(body) {
        let room = (await this.RoomService.getRoomById(body.roomId));
        if (room !== "undefined" && room !== null) {
            let Administrators = room.Administrators;
            console.log(Administrators);
            return Administrators;
        }
        else
            return null;
    }
    async changeOwner(body) {
        this.RoomService.changeOwner(body.roomId, body.newOwner);
    }
    async getOwner(body) {
        let room = await this.RoomService.getRoomById(body.roomId);
        if (room !== "undefined" && room !== null) {
            return room.RoomOwner;
        }
        else
            return null;
    }
    async deleteUser(body) {
        await this.RoomService.deleteUser(body.roomId, body.user);
    }
    async getRoomById(body) {
        return await this.RoomService.getRoomById(body.roomId);
    }
    async changeRoomPassword(body) {
        return await this.RoomService.changeRoomPassword(body.roomId, body.newPassword);
    }
    async changeRoomName(body) {
        return await this.RoomService.changeRoomName(body.roomId, body.newName);
    }
    async checkPassword(body) {
        return await this.RoomService.checkPassword(body.roomId, body.password);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], chatRoomController.prototype, "createRoom", null);
__decorate([
    (0, common_1.Post)('addUser'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], chatRoomController.prototype, "addUser", null);
__decorate([
    (0, common_1.Post)('getPublicRooms'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], chatRoomController.prototype, "getPublicRooms", null);
__decorate([
    (0, common_1.Get)('getAllRooms'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], chatRoomController.prototype, "getAllRooms", null);
__decorate([
    (0, common_1.Post)('addAdministrator'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], chatRoomController.prototype, "addAdministrator", null);
__decorate([
    (0, common_1.Post)('getRoomMemebers'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], chatRoomController.prototype, "getRoomMembers", null);
__decorate([
    (0, common_1.Post)('getRoomAdministrators'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], chatRoomController.prototype, "getRoomAdministrators", null);
__decorate([
    (0, common_1.Post)('changeOwner'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], chatRoomController.prototype, "changeOwner", null);
__decorate([
    (0, common_1.Post)('getOwner'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], chatRoomController.prototype, "getOwner", null);
__decorate([
    (0, common_1.Post)('deleteUser'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], chatRoomController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Post)('getRoomById'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], chatRoomController.prototype, "getRoomById", null);
__decorate([
    (0, common_1.Post)('changeRoomPassword'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], chatRoomController.prototype, "changeRoomPassword", null);
__decorate([
    (0, common_1.Post)('changeRoomName'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], chatRoomController.prototype, "changeRoomName", null);
__decorate([
    (0, common_1.Post)('checkPassword'),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], chatRoomController.prototype, "checkPassword", null);
chatRoomController = __decorate([
    (0, common_1.Controller)('chatRoom'),
    __param(1, (0, typeorm_1.InjectRepository)(chatRoom_entity_1.chatRoom)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [chatRoom_service_1.chatRoomService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService])
], chatRoomController);
exports.chatRoomController = chatRoomController;
//# sourceMappingURL=chatRoom.controller.js.map